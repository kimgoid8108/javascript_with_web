document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector("#Hero");

  const maps = {
    village: document.getElementById("village"),
    dungeon: document.getElementById("dungeon"),
    shop: document.getElementById("shop"),
  };

  let currentMapId = "village";
  let map = maps[currentMapId];

  map.classList.add("active");
  map.appendChild(hero);

  // 빌리지 중앙에서 시작
  let x = map.offsetWidth / 2 - hero.offsetWidth / 2;
  let y = map.offsetHeight / 2 - hero.offsetHeight / 2;

  let speed = 3;
  let keys = {};
  let facing = "right";
  let animationId = null;
  let shopEnterPosition = { x: 0, y: 0 };

  // 키 입력 감지
  window.addEventListener("keydown", (e) => {
    keys[e.key] = true;

    if (e.key === "ArrowRight" || e.key === "d") {
      facing = "right";
      hero.style.transform = "scaleX(-1)";
    }
    if (e.key === "ArrowLeft" || e.key === "a") {
      facing = "left";
      hero.style.transform = "scaleX(1)";
    }
  });

  window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
  });

  // 회전 각도 추출 함수
  function getRotationAngle(element) {
    const style = window.getComputedStyle(element);
    const transform = style.transform || style.webkitTransform;

    if (transform === "none" || !transform) return 0;

    const values = transform.split("(")[1].split(")")[0].split(",");
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);
    const angle = Math.atan2(b, a) * (180 / Math.PI);

    return angle;
  }

  function isCollidingRotated(heroX, heroY, heroW, heroH, obstacle) {
    const ox = obstacle.offsetLeft;
    const oy = obstacle.offsetTop;
    const ow = obstacle.offsetWidth;
    const oh = obstacle.offsetHeight;

    const obstacleAngle = getRotationAngle(obstacle);

    if (Math.abs(obstacleAngle) < 0.1) {
      return !(
        heroX + heroW <= ox ||
        heroX >= ox + ow ||
        heroY + heroH <= oy ||
        heroY >= oy + oh
      );
    }

    // 히어로의 4개 꼭짓점
    const heroCorners = [
      [heroX, heroY],
      [heroX + heroW, heroY],
      [heroX + heroW, heroY + heroH],
      [heroX, heroY + heroH],
    ];

    // 장애물 (회전 적용)
    const ocx = ox + ow / 2;
    const ocy = oy + oh / 2;
    const rad = (obstacleAngle * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);

    const obstacleCorners = [
      [-ow / 2, -oh / 2],
      [ow / 2, -oh / 2],
      [ow / 2, oh / 2],
      [-ow / 2, oh / 2],
    ].map(([x, y]) => [x * cos - y * sin + ocx, x * sin + y * cos + ocy]);

    // SAT 충돌 감지
    const axes = [
      [1, 0],
      [0, 1],
      [cos, sin],
      [-sin, cos],
    ];

    for (const [ax, ay] of axes) {
      const heroProj = heroCorners.map(([x, y]) => x * ax + y * ay);
      const obstProj = obstacleCorners.map(([x, y]) => x * ax + y * ay);

      const heroMin = Math.min(...heroProj);
      const heroMax = Math.max(...heroProj);
      const obstMin = Math.min(...obstProj);
      const obstMax = Math.max(...obstProj);

      if (heroMax < obstMin || obstMax < heroMin) {
        return false;
      }
    }

    return true;
  }

  // 충돌 감지(히어로 좌상단 기준)
  function isColliding(heroX, heroY, heroW, heroH, obstacle) {
    return isCollidingRotated(heroX, heroY, heroW, heroH, obstacle);
  }

  function moveHero() {
    const currentMap = map;

    let newX = x;
    let newY = y;

    // 이동 입력 처리
    if (keys["ArrowUp"] || keys["w"]) newY -= speed;
    if (keys["ArrowDown"] || keys["s"]) newY += speed;
    if (keys["ArrowLeft"] || keys["a"]) newX -= speed;
    if (keys["ArrowRight"] || keys["d"]) newX += speed;

    const heroWidth = hero.offsetWidth;
    const heroHeight = hero.offsetHeight;
    const mapWidth = map.offsetWidth;
    const mapHeight = map.offsetHeight;

    // 맵 경계 제한
    newX = Math.max(0, Math.min(mapWidth - heroWidth, newX));
    newY = Math.max(0, Math.min(mapHeight - heroHeight, newY));

    // 장애물 충돌
    let blockedX = false;
    let blockedY = false;

    currentMap.querySelectorAll(".obstacle").forEach((ob) => {
      // X축만 변경했을 때 충돌 체크
      if (isColliding(newX, y, heroWidth, heroHeight, ob)) {
        blockedX = true;
      }
      // Y축만 변경했을 때 충돌 체크
      if (isColliding(x, newY, heroWidth, heroHeight, ob)) {
        blockedY = true;
      }
    });

    // 충돌하지 않은 축만 이동
    if (!blockedX) x = newX;
    if (!blockedY) y = newY;

    // 히어로 위치 업데이트
    hero.style.left = `${x}px`;
    hero.style.top = `${y}px`;

    // 맵 전환 영역 정의
    const villageEnterZoneXStart = mapWidth / 2 - 50;
    const villageEnterZoneXEnd = mapWidth / 2 + 50;
    const dungeonEnterZoneXStart = mapWidth * 0.3 - 50;
    const dungeonEnterZoneXEnd = mapWidth * 0.3 + 50;
    const heroCenter = x + heroWidth / 2;

    // 1. 빌리지 → 던전 (하단 중앙 입구)
    if (
      currentMap.id === "village" &&
      y + heroHeight >= mapHeight - 10 &&
      heroCenter >= villageEnterZoneXStart &&
      heroCenter <= villageEnterZoneXEnd
    ) {
      changeMap("dungeon");
      return;
    }

    // 2. 던전 → 빌리지 (상단 왼쪽 30% 출구)
    if (
      currentMap.id === "dungeon" &&
      y <= 10 &&
      heroCenter >= dungeonEnterZoneXStart &&
      heroCenter <= dungeonEnterZoneXEnd
    ) {
      changeMap("village", true);
      return;
    }

    // 3. 빌리지 → Shop (왼쪽 상단 상점 입구)
    const shopEnterX = 100;
    const shopEnterY = 310;
    const shopEnterRange = 60;

    if (
      currentMap.id === "village" &&
      x >= shopEnterX - shopEnterRange &&
      x <= shopEnterX + shopEnterRange &&
      y >= shopEnterY - shopEnterRange &&
      y <= shopEnterY + shopEnterRange
    ) {
      // 현재 위치 저장
      shopEnterPosition.x = x;
      shopEnterPosition.y = y;
      changeMap("shop");

      return;
    }

    // 4. Shop → 빌리지 (상점 나가기 - 하단 중앙)
    if (
      currentMap.id === "shop" &&
      y + heroHeight >= mapHeight - 10 &&
      heroCenter >= mapWidth / 2 - 50 &&
      heroCenter <= mapWidth / 2 + 50
    ) {
      changeMap("village", false, "fromShop");
      shopinven.style.display = "none";
      potioninfo.style.display = "none";
      swordinfo.style.display = "none";
      return;
    }

    animationId = requestAnimationFrame(moveHero);
  }

  // 맵 전환 함수
  function changeMap(nextMapId, fromDungeon = false, fromShop = false) {
    // 이전 애니메이션 중지
    if (animationId) {
      cancelAnimationFrame(animationId);
    }

    map.classList.remove("active");
    map = maps[nextMapId];
    map.classList.add("active");
    map.appendChild(hero);

    // ⭐ 이 부분 추가 - Heroinfo 항상 표시
    const heroInfo = document.getElementById("Heroinfo");
    if (heroInfo) {
      heroInfo.style.display = "block";
      heroInfo.style.visibility = "visible";
    }

    const heroWidth = hero.offsetWidth;
    const heroHeight = hero.offsetHeight;

    if (nextMapId === "dungeon") {
      // 던전 입장: 상단 왼쪽 30% 지점
      x = map.offsetWidth * 0.3 - heroWidth / 2;
      y = 60;
      // ⭐ 던전에서도 표시
      if (heroInfo) heroInfo.style.display = "block";
    } else if (nextMapId === "shop") {
      // 상점 입장: 하단 중앙에서 시작
      x = map.offsetWidth / 2 - heroWidth / 2;
      y = map.offsetHeight - heroHeight - 70;
      // ⭐ 상점에서도 표시
      if (heroInfo) heroInfo.style.display = "block";
    } else if (nextMapId === "village") {
      if (fromDungeon) {
        // 던전에서 복귀: 하단 중앙 입구
        x = map.offsetWidth / 2 - heroWidth / 2;
        y = map.offsetHeight - heroHeight - 70;
      } else if (fromShop === "fromShop") {
        // 상점에서 복귀: 고정 위치로 나오기
        x = 320;
        y = 170;
      } else {
        // 기본: 빌리지 중앙
        x = map.offsetWidth / 2 - heroWidth / 2;
        y = map.offsetHeight / 2;
      }
    }

    currentMapId = nextMapId;

    // 새로운 애니메이션 루프 시작
    animationId = requestAnimationFrame(moveHero);
  }

  // 초기 애니메이션 시작
  moveHero();
});
