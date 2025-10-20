// battle.js - 전투 시스템
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector("#Hero");
  const maps = {
    village: document.getElementById("village"),
    dungeon: document.getElementById("dungeon"),
    shop: document.getElementById("shop"),
    battle: document.getElementById("battle"),
  };

  let currentMonster = null; // 현재 조우한 몬스터
  let canEnterBattle = false; // 전투 가능 상태
  let beforeBattlePosition = { x: 0, y: 0, mapId: "" }; // 전투 전 위치 저장
  let defeatedMonsters = new Set(); // 처치된 몬스터 목록

  // ==================== 몬스터 충돌 감지 ====================
  function checkMonsterCollision() {
    const currentMap = hero.parentElement;
    if (!currentMap) return;

    const monsters = currentMap.querySelectorAll(".monster");
    const heroRect = hero.getBoundingClientRect();
    const heroX = parseFloat(hero.style.left) || 0;
    const heroY = parseFloat(hero.style.top) || 0;
    const heroWidth = hero.offsetWidth;
    const heroHeight = hero.offsetHeight;

    // 디버깅
    if (monsters.length > 0) {
      console.log("몬스터 발견:", monsters.length, "개");
      console.log("히어로 위치:", heroX, heroY);
    }

    let nearMonster = null;

    monsters.forEach((monster) => {
      // 이미 처치된 몬스터는 무시
      if (defeatedMonsters.has(monster)) return;

      // 몬스터가 숨김 상태면 무시
      if (monster.style.display === "none") return;

      const monsterX = parseFloat(monster.style.left) || 0;
      const monsterY = parseFloat(monster.style.top) || 0;
      const monsterWidth = monster.offsetWidth;
      const monsterHeight = monster.offsetHeight;

      // AABB 충돌 감지
      const isColliding = !(
        heroX + heroWidth < monsterX ||
        heroX > monsterX + monsterWidth ||
        heroY + heroHeight < monsterY ||
        heroY > monsterY + monsterHeight
      );

      if (isColliding) {
        nearMonster = monster;
      }
    });

    // 몬스터와 충돌 중이면
    if (nearMonster) {
      currentMonster = nearMonster;
      canEnterBattle = true;
      showBattlePrompt(true);
    } else {
      currentMonster = null;
      canEnterBattle = false;
      showBattlePrompt(false);
    }
  }

  // ==================== 전투 안내 UI ====================
  function showBattlePrompt(show) {
    let prompt = document.getElementById("battle-prompt");

    if (show && !prompt) {
      // 프롬프트 생성
      prompt = document.createElement("div");
      prompt.id = "battle-prompt";
      prompt.innerHTML = "SPACE - 전투 시작!";
      prompt.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px 40px;
        border-radius: 10px;
        font-size: 24px;
        font-weight: bold;
        z-index: 1000;
        animation: pulse 1s infinite;
      `;

      // 애니메이션 CSS 추가
      if (!document.getElementById("battle-prompt-style")) {
        const style = document.createElement("style");
        style.id = "battle-prompt-style";
        style.textContent = `
          @keyframes pulse {
            0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
          }
        `;
        document.head.appendChild(style);
      }

      document.body.appendChild(prompt);
    } else if (!show && prompt) {
      // 프롬프트 제거
      prompt.remove();
    }
  }

  // ==================== 전투 진입 ====================
  function enterBattle() {
    if (!canEnterBattle || !currentMonster) return;

    // 현재 위치 저장
    beforeBattlePosition.x = parseFloat(hero.style.left) || 0;
    beforeBattlePosition.y = parseFloat(hero.style.top) || 0;
    beforeBattlePosition.mapId = hero.parentElement.id;

    // 몬스터 데이터 저장 (전투에서 사용)
    const monsterData = {
      element: currentMonster,
      name: currentMonster.dataset.name || "블루 몬스터",
      hp: parseInt(currentMonster.dataset.hp) || 100,
      maxHp: parseInt(currentMonster.dataset.maxHp) || 100,
      attack: parseInt(currentMonster.dataset.attack) || 15,
      defense: parseInt(currentMonster.dataset.defense) || 5,
    };

    // 몬스터 숨기기
    currentMonster.style.display = "none";

    // 전투 화면으로 전환
    showBattlePrompt(false);
    changeMapToBattle(monsterData);
  }

  // ==================== 전투 맵으로 전환 ====================
  function changeMapToBattle(monsterData) {
    const currentMap = document.getElementById(beforeBattlePosition.mapId);
    const battleMap = maps.battle;

    if (currentMap) currentMap.classList.remove("active");
    battleMap.classList.add("active");
    battleMap.appendChild(hero);

    // 전투 화면 초기화 (여기서 턴제 RPG 시작)
    initBattle(monsterData);
  }

  // ==================== 전투 초기화 (턴제 RPG) ====================
  function initBattle(monsterData) {
    console.log("전투 시작!", monsterData);

    // TODO: 여기서 턴제 전투 UI 구성
    // - 플레이어 HP/스탯 표시
    // - 몬스터 HP/이미지 표시
    // - 공격/방어/아이템 버튼
    // - 턴 진행 로직

    // 임시: 3초 후 전투 종료 (테스트용)
    setTimeout(() => {
      endBattle(true); // true = 승리, false = 패배
    }, 3000);
  }

  // ==================== 전투 종료 ====================
  function endBattle(victory) {
    console.log(victory ? "승리!" : "패배...");

    // 전투 맵에서 나가기
    const battleMap = maps.battle;
    const returnMap = maps[beforeBattlePosition.mapId];

    battleMap.classList.remove("active");
    returnMap.classList.add("active");
    returnMap.appendChild(hero);

    // 원래 위치로 복귀
    hero.style.left = `${beforeBattlePosition.x}px`;
    hero.style.top = `${beforeBattlePosition.y}px`;

    if (victory) {
      // 승리 시: 몬스터를 처치 목록에 추가
      defeatedMonsters.add(currentMonster);

      // 30초 후 몬스터 부활
      setTimeout(() => {
        if (currentMonster) {
          currentMonster.style.display = "";
          defeatedMonsters.delete(currentMonster);
        }
      }, 30000);
    } else {
      // 패배 시: 몬스터 즉시 다시 표시
      if (currentMonster) {
        currentMonster.style.display = "";
      }
    }

    currentMonster = null;
    canEnterBattle = false;
  }

  // ==================== 키 입력 (SPACE로 전투 진입) ====================
  window.addEventListener("keydown", (e) => {
    if (e.key === " " && canEnterBattle) {
      e.preventDefault();
      enterBattle();
    }
  });

  // ==================== 충돌 감지 루프 ====================
  function monsterCollisionLoop() {
    // battle 맵이 아닐 때만 충돌 감지
    const currentMap = hero.parentElement;
    if (currentMap && currentMap.id !== "battle") {
      checkMonsterCollision();
    }
    requestAnimationFrame(monsterCollisionLoop);
  }

  monsterCollisionLoop();

  // ==================== 전역 함수로 노출 (다른 파일에서 사용) ====================
  window.BattleSystem = {
    endBattle: endBattle,
    getCurrentMonster: () => currentMonster,
  };
});
