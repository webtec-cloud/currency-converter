const cur1 = document.querySelector(".cur-1");
const cur2 = document.querySelector(".cur-2");
const cur1Input = document.querySelector(".cur-1-input");
const cur2Input = document.querySelector(".cur-2-input");

const baseRate = document.querySelector(".base");
const switchCur = document.querySelector(".switch-cur");

const countries = [
  {
    name: "AED",
    flagURL: "https://www.worldometers.info/img/flags/ae-flag.gif",
  },
  {
    name: "EUR",
    flagURL: "https://www.worldometers.info/img/flags/au-flag.gif",
  },
  {
    name: "GBP",
    flagURL: "https://www.worldometers.info/img/flags/uk-flag.gif",
  },
  {
    name: "USD",
    flagURL: "https://www.worldometers.info/img/flags/us-flag.gif",
  },
  {
    name: "AFN",
    flagURL: "https://www.worldometers.info/img/flags/af-flag.gif",
  },
  {
    name: "CAD",
    flagURL: "https://www.worldometers.info/img/flags/ca-flag.gif",
  },
  {
    name: "JPY",
    flagURL: "https://www.worldometers.info/img/flags/ja-flag.gif",
  },
  {
    name: "USD",
    flagURL: "https://www.worldometers.info/img/flags/us-flag.gif",
  },
  {
    name: "PKR",
    flagURL: "https://www.worldometers.info/img/flags/pk-flag.gif",
  },
];

const apiURL = "https://v6.exchangerate-api.com/v6/";
const key = "093352694b431c8342cff984";

// Get Exchange Rate
async function getExchangeRate() {
  const cur1Value = cur1.value;
  const cur2Value = cur2.value;

  const response = await fetch(`${apiURL}${key}/latest/${cur1Value}`);
  const data = await response.json();
  console.log(data);

  const rate = data.conversion_rates[cur2Value];

  baseRate.textContent = `1 ${cur1Value} = ${rate.toFixed(2)} ${cur2Value}`;

  cur2Input.value = (cur1Input.value * rate).toFixed(2);
}

// Add Event Listeners
cur1.addEventListener("change", () => {
  getExchangeRate();
  getflag();
});
cur2.addEventListener("change", () => {
  getExchangeRate();
  getflag();
});
cur1Input.addEventListener("input", getExchangeRate);
cur2Input.addEventListener("input", getExchangeRate);

function getflag() {
  countries.forEach((country) => {
    // console.log(country.flagURL);
    if (cur1.value == country.name) {
      const imgsrc = document.querySelector(".from img");
      imgsrc.setAttribute("src", country.flagURL);
    }
    if (cur2.value == country.name) {
      const imgsrc = document.querySelector(".to img");
      imgsrc.setAttribute("src", country.flagURL);
    }
  });
}

switchCur.addEventListener("click", () => {
  const cur1Value = cur1.value;
  cur1.value = cur2.value;
  cur2.value = cur1Value;
  switchCur.classList.toggle("rotate");
  getExchangeRate();
  getflag();
});
