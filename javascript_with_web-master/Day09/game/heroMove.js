document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector("#Hero");
  let currentMap = "village";

  const maps = {
    village: document.getElementById("village"),
    dungeon: document.getElementById("dungeon"),
  };

  let map = maps[currentMap];

  let x = map.offsetWidth / 2;
  let y = map.offsetHeight / 2;

  let speed = 3;
  let keys = {};
  let facing = "right";

  // 키 입력 감지
  window.addEventListener("keydown", (e) => {
    keys[e.key] = true;

    if (e.key === "ArrowRight") {
      facing = "right";
      hero.style.transform = "scaleX(-1)";
    }
    if (e.key === "ArrowLeft") {
      facing = "left";
      hero.style.transform = "scaleX(1)";
    }
    if (e.key === "d") {
      facing = "right";
      hero.style.transform = "scaleX(-1)";
    }
    if (e.key === "a") {
      facing = "left";
      hero.style.transform = "scaleX(1)";
    }
  });

  window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
  });

  function moveHero() {
    const currentMap = document.querySelector(".map.active");

    if (keys["ArrowUp"]) y -= speed;
    if (keys["w"]) y -= speed;
    if (keys["ArrowDown"]) y += speed;
    if (keys["s"]) y += speed;
    if (keys["ArrowLeft"]) x -= speed;
    if (keys["a"]) x -= speed;
    if (keys["ArrowRight"]) x += speed;
    if (keys["d"]) x += speed;

    const heroWidth = hero.offsetWidth;
    const heroHeight = hero.offsetHeight;
    const mapWidth = map.offsetWidth;
    const mapHeight = map.offsetHeight;

    // 화면 밖으로 못 나가게
    x = Math.max(heroWidth / 2, Math.min(mapWidth - heroWidth / 2, x));
    y = Math.max(heroHeight / 2, Math.min(mapHeight - heroHeight / 2, y));

    let blokced = flase;
    currentMap.querySelectorAll(".obstacle").forEach((ob) => {
      if (isCollding(newX, newY, heroWidth, heroHeight, ob)) {
        blokced = true;
      }
    });

    if (!blokced) {
      x = newX;
      y = newY;
    }

    hero.style.left = `${x}px`;
    hero.style.top = `${y}px`;

    if (currentMap == "village" && y >= mapHeight - heroHeight / 2 - 10) {
      changeMap("dungeon");
    }

    requestAnimationFrame(moveHero);
  }

  function changeMap(nextMapId) {
    map.classList.remove("active");
    map = maps[nextMapId];
    map.classList.add("active");
    map.appendChild(hero);

    if (nextMapId == "dungeon") {
      x = map.offsetWidth / 2;
      y = 50;
    }

    currentMap = nextMapId;
  }

  moveHero();
});
