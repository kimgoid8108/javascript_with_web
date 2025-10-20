document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector("#Hero");

  const maps = {
    village: document.getElementById("village"),
    dungeon: document.getElementById("dungeon"),
  };

  let currentMapId = "village"; // 시작 맵 설정
  let map = maps[currentMapId];

  map.classList.add("active");
  map.appendChild(hero);

  // 빌리지 중앙에서 시작
  let x = map.offsetWidth / 2 - hero.offsetWidth / 2;
  let y = map.offsetHeight / 2 - hero.offsetHeight / 2;

  let speed = 3;
  let keys = {};
  let facing = "right";
  let animationId = null; // 애니메이션 프레임 추적

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

  // 점이 회전된 사각형 안에 있는지 확인
  function pointInRotatedRect(px, py, rx, ry, rw, rh, angle) {
    // 사각형 중심점
    const cx = rx + rw / 2;
    const cy = ry + rh / 2;

    // 점을 사각형 중심 기준으로 회전 (역회전)
    const rad = (-angle * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);

    const dx = px - cx;
    const dy = py - cy;

    const rotatedX = dx * cos - dy * sin + cx;
    const rotatedY = dx * sin + dy * cos + cy;

    // 회전된 좌표가 원래 사각형 안에 있는지 확인
    return (
      rotatedX >= rx &&
      rotatedX <= rx + rw &&
      rotatedY >= ry &&
      rotatedY <= ry + rh
    );
  }

  // 회전된 사각형끼리 충돌 감지 (SAT 알고리즘)
  function isCollidingRotated(heroX, heroY, heroW, heroH, obstacle) {
    const ox = obstacle.offsetLeft;
    const oy = obstacle.offsetTop;
    const ow = obstacle.offsetWidth;
    const oh = obstacle.offsetHeight;

    const obstacleAngle = getRotationAngle(obstacle);

    // 회전이 없으면 기본 AABB 충돌 감지
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

    // 장애물의 4개 꼭짓점 (회전 적용)
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

    //충돌 감지
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

      // 겹치지 않는 축이 있으면 충돌 없음
      if (heroMax < obstMin || obstMax < heroMin) {
        return false;
      }
    }

    // 모든 축에서 겹침 / 충돌
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

    // 빌리지 → 던전 (하단 중앙 입구)
    if (
      currentMap.id === "village" &&
      y + heroHeight >= mapHeight - 10 &&
      heroCenter >= villageEnterZoneXStart &&
      heroCenter <= villageEnterZoneXEnd
    ) {
      changeMap("dungeon");
      return;
    }

    // 던전 → 빌리지 (상단 왼쪽 30% 출구)
    if (
      currentMap.id === "dungeon" &&
      y <= 10 &&
      heroCenter >= dungeonEnterZoneXStart &&
      heroCenter <= dungeonEnterZoneXEnd
    ) {
      changeMap("village", true);
      return;
    }

    animationId = requestAnimationFrame(moveHero);
  }

  // 맵 전환 함수
  function changeMap(nextMapId, fromDungeon = false) {
    // 이전 애니메이션 중지
    if (animationId) {
      cancelAnimationFrame(animationId);
    }

    map.classList.remove("active");
    map = maps[nextMapId];
    map.classList.add("active");
    map.appendChild(hero);

    const heroWidth = hero.offsetWidth;
    const heroHeight = hero.offsetHeight;

    if (nextMapId === "dungeon") {
      // 던전 입장: 상단 왼쪽 30% 지점
      x = map.offsetWidth * 0.3 - heroWidth / 2;
      y = 60;
    } else if (nextMapId === "village") {
      // 빌리지로 복귀: 하단 입구
      x = map.offsetWidth / 2 - heroWidth / 2;
      y = fromDungeon
        ? map.offsetHeight - heroHeight - 70
        : map.offsetHeight / 2;
    }

    currentMapId = nextMapId;

    // 새로운 애니메이션 루프 시작
    animationId = requestAnimationFrame(moveHero);
  }

  // 초기 애니메이션 시작
  moveHero();
});
