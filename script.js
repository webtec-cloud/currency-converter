const cur1 = document.querySelector(".cur-1");
const cur2 = document.querySelector(".cur-2");
const cur1input = document.querySelector("cur-1-input");
const cur2input = document.querySelector("cur-2-input");
const baserate = document.querySelector(".base");
const switchcur = document.querySelector(".switch-cur");

const countries = [
  {
    name: "AED",
    FLAGURL: "https://www.worldometers.info/img/flags/ae-flag.gif",
  },
  {
    name: "EUR",
    FLAGURL: "https://www.worldometers.info/img/flags/au-flag.gif",
  },
  {
    name: "GBP",
    FLAGURL: "https://www.worldometers.info/img/flags/uk-flag.gif",
  },
  {
    name: "USD",
    FLAGURL: "https://www.worldometers.info/img/flags/us-flag.gif",
  },
];

const apiURL = "https://v6.exchangerate-api.com/v6/";
const key = "093352694b431c8342cff984";

async function getexchangerate() {
  const cur1val = cur1.value;
  const cur2val = cur2.value;
  const response = await fetch(`${apiURL}${key}/latest/${cur1val}`);
  const data = await response.json();
  console.log(data);
  const rate = data.conversion_rates[cur2val];
  baserate.textContent = `1 ${cur1val} = ${rate.toFixed(2)} ${cur2val}`;
  cur2input.value = (cur1input.value * rate).toFixed(2);
}
getexchangerate();
