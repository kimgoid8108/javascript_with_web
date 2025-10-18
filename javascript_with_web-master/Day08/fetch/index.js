// ----------------------------------------------------------------
const Bupyeong = document.querySelector("#Bupyeong");
const Bern = document.querySelector("#Bern");
const Wellington = document.querySelector("#Wellington");
const Toshkent = document.querySelector("#Toshkent");
const Tokyo = document.querySelector("#Tokyo");
const LosAngeles = document.querySelector("#LosAngeles");
const London = document.querySelector("#London");
// ----------------------------------------------------------------

// ----------------------------------------------------------------
const KoreaTime = document.querySelector("#KoreaTime");
const BernTime = document.querySelector("#BernTime");
const WellingtonTime = document.querySelector("#WellingtonTime");
const ToshkentTime = document.querySelector("#ToshkentTime");
const TokyoTime = document.querySelector("#TokyoTime");
const LosAngelesTime = document.querySelector("#LosAngelesTime");
const LondonTime = document.querySelector("#LondonTime");

const allTime = [
  KoreaTime,
  BernTime,
  WellingtonTime,
  ToshkentTime,
  TokyoTime,
  LosAngelesTime,
  LondonTime,
];
// ----------------------------------------------------------------

// API / lat, lon
// ----------------------------------------------------------------
const APIKEY = "c75cb039ca0efa334c97b606afa04ee0";
const Bupyeonglat = 37.491;
const Bupyeonglon = 126.723;

const Bernlat = 46.95;
const Bernlon = 7.446;

const Wellingtonlat = -41.29;
const Wellingtonlon = 174.777;

const Toshkentlat = 41.301;
const Toshkentlon = 69.244;

const Tokyolat = 35.684;
const Tokyolon = 139.774;

const LosAngeleslat = 34.066;
const LosAngeleslon = -118.207;

const Londonlat = 51.502;
const Londonlon = -0.131;

const weatherImage = {
  Clear: "img/clear.jpg",
  Clouds: "img/cloud1.jpg",
  Rain: "img/rain.jpg",
  Snow: "img/snow.jpg",
  Thunderstorm: "img/thunder.jpg",
};

// --------------------------------------------------------------------------------------------------------------
Bupyeong.addEventListener("click", () => {
  allTime.forEach((div) => (div.style.display = "none"));
  KoreaTime.style.display = "block";
  setInterval(() => {
    KoreaTime.innerHTML = `한국 시간:` + new Date().toLocaleString();
  }, 1000);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${Bupyeonglat}&lon=${Bupyeonglon}&appid=${APIKEY}`
  )
    .then((v) => v.json())
    .then((v) => {
      const weather = v.weather[0].main;
      document.body.style.backgroundImage = `url('${weatherImage[weather]})`;
    });
});
// --------------------------------------------------------------------------------------------------------------
Bern.addEventListener("click", () => {
  allTime.forEach((div) => (div.style.display = "none"));
  BernTime.style.display = "block";

  setInterval(() => {
    const now = new Date().toLocaleString("de-CH", {
      timeZone: "Europe/Zurich",
      hour12: true,
    });
    BernTime.innerHTML = `베른: ${now}`;
  }, 1000);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${Bernlat}&lon=${Bernlon}&appid=${APIKEY}`
  )
    .then((v) => v.json())
    .then((v) => console.log(v));
});
// --------------------------------------------------------------------------------------------------------------
Wellington.addEventListener("click", () => {
  allTime.forEach((div) => (div.style.display = "none"));
  WellingtonTime.style.display = "block";

  setInterval(() => {
    const now = new Date().toLocaleString("en-NZ", {
      timeZone: "Pacific/Auckland",
      hour12: true,
    });
    WellingtonTime.innerHTML = `웰링턴: ${now}`;
  }, 1000);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${Wellingtonlat}&lon=${Wellingtonlon}&appid=${APIKEY}`
  )
    .then((v) => v.json())
    .then((v) => console.log(v));
});
// --------------------------------------------------------------------------------------------------------------
Toshkent.addEventListener("click", () => {
  allTime.forEach((div) => (div.style.display = "none"));
  ToshkentTime.style.display = "block";

  setInterval(() => {
    const now = new Date().toLocaleString("uz-UZ", {
      timeZone: "Asia/Tashkent",
      hour12: true,
    });
    ToshkentTime.innerHTML = `타슈켄트: ${now}`;
  }, 1000);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${Toshkentlat}&lon=${Toshkentlon}&appid=${APIKEY}`
  )
    .then((v) => v.json())
    .then((v) => console.log(v));
});

// --------------------------------------------------------------------------------------------------------------

Tokyo.addEventListener("click", () => {
  allTime.forEach((div) => (div.style.display = "none"));
  TokyoTime.style.display = "block";

  setInterval(() => {
    const now = new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
      hour12: true,
    });
    TokyoTime.innerHTML = `도쿄: ${now}`;
  }, 1000);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${Tokyolat}&lon=${Tokyolon}&appid=${APIKEY}`
  )
    .then((v) => v.json())
    .then((v) => console.log(v));
});

// --------------------------------------------------------------------------------------------------------------

LosAngeles.addEventListener("click", () => {
  allTime.forEach((div) => (div.style.display = "none"));
  LosAngelesTime.style.display = "block";

  setInterval(() => {
    const now = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      hour12: true,
    });
    LosAngelesTime.innerHTML = `로스엔젤레스: ${now}`;
  }, 1000);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${LosAngeleslat}&lon=${LosAngeleslon}&appid=${APIKEY}`
  )
    .then((v) => v.json())
    .then((v) => console.log(v));
});

// --------------------------------------------------------------------------------------------------------------

London.addEventListener("click", () => {
  allTime.forEach((div) => (div.style.display = "none"));
  LondonTime.style.display = "block";

  setInterval(() => {
    const now = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
      hour12: true,
    });
    LondonTime.innerHTML = `런던: ${now}`;
  }, 1000);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${Londonlat}&lon=${Londonlon}&appid=${APIKEY}`
  )
    .then((v) => v.json())
    .then((v) => console.log(v));
});
