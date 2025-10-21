document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("Hero");
  const monster = document.getElementById("GreenMonster");
  const hpDisplay = document.getElementById("Hp");
  let heroHp = 100;

  // 🔥 몬스터 공격 주기 (2초마다)
  const attackInterval = setInterval(() => {
    if (!hero || !monster) return;

    // 히어로와 몬스터 거리 계산
    const heroRect = hero.getBoundingClientRect();
    const monsterRect = monster.getBoundingClientRect();
    const distance = Math.abs(heroRect.left - monsterRect.left);

    // 일정 거리 안에 들어오면 공격!
    if (distance < 100) {
      const damage = Math.floor(Math.random() * 10) + 5; // 5~15 랜덤 대미지
      heroHp -= damage;
      if (heroHp < 0) heroHp = 0;

      hpDisplay.textContent = heroHp;

      // ⚔️ 공격 애니메이션 효과 (잠깐 흔들림)
      monster.style.transform = "translateX(-10px)";
      setTimeout(() => {
        monster.style.transform = "translateX(0)";
      }, 150);

      // 💥 히어로 피격 효과
      hero.style.filter =
        "brightness(1.5) sepia(1) saturate(5) hue-rotate(-50deg)";
      setTimeout(() => {
        hero.style.filter = "brightness(100%)";
      }, 150);

      // HP가 0 이하 → 게임오버
      if (heroHp <= 0) {
        clearInterval(attackInterval);
        alert("💀 Game Over! 몬스터에게 패배했습니다.");
      }
    }
  }, 1000); // 2초마다 공격
});
