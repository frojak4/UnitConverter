let app = document.getElementById("app");
let input = "";
let unitValue1 = 0;
let unitValue2 = 0;
let distKlasse = "aktiv";
let speedKlasse = "inaktiv";
let vektKlasse = "inaktiv";
let tidKlasse = "inaktiv"

const distanse = [
 {
  name: "Meter",
  toUnit: 1,
 },
 {
  name: "Desimeter",
  toUnit: 0.1
 },
 {
  name: "Centimeter",
  toUnit: 0.01,
 },
 {
  name: "Millimeter",
  toUnit: 0.001,
 },
 {
  name: "Feet",
  toUnit: 0.3048,
 },
 {
  name: "Inches",
  toUnit: 0.0254,
 },
 {
  name: "Miles",
  toUnit: 1609.344,
 },
 {
  name: "Yard",
  toUnit: 0.9144,
 },
 {
  name: "Lightyear",
  toUnit: 9460730472580044,
 },
]



const vekt = [
  {
    name: "Kilo",
    toUnit: 1
  },
  {
    name: "Gram",
    toUnit: 0.001
  },
  {
    name: "Tonn",
    toUnit: 1000
  },
  {
    name: "Pound",
    toUnit: 0.45359237
  },
  {
    name: "Ounce",
    toUnit: 0.0283495231
  },
]

const speed = [
  {
    name: "KM/h",
    toUnit: 1
  },
  {
    name: "MI/h",
    toUnit: 1.609344
  },
  {
    name: "M/s",
    toUnit: 3.6
  }
]
// konverterer fra sekunder
const time = [
  {
    name: "Year",
    toUnit: 31556926,
  },
  {
    name: "Month",
    toUnit: 2629743,
  },
  {
    name: "Day",
    toUnit: 86400,
  },
  {
    name: "Hour",
    toUnit: 3600,
  },
  {
    name: "Minutes",
    toUnit: 60,
  },
  {
    name: "Seconds",
    toUnit: 1,
  }
]

let units = distanse

let output = 0;

function updateView() {
    app.innerHTML = /*HTML*/`
    <div class="meny">
      <div onclick="skift(distanse, 'aktiv', 'inaktiv', 'inaktiv', 'inaktiv')" class="${distKlasse}">Distanse</div>
      <div onclick="skift(vekt, 'inaktiv', 'aktiv', 'inaktiv', 'inaktiv')" class=${vektKlasse}>Vekt</div>
      <div onclick="skift(speed, 'inaktiv', 'inaktiv', 'aktiv', 'inaktiv')" class=${speedKlasse}>Fart</div>
      <div onclick="skift(time, 'inaktiv', 'inaktiv', 'inaktiv', 'aktiv')" class=${tidKlasse}>Tid</div>
    </div>
      <div class="container">
        <div class="unit1">
          
          <label for="unit1">Choose a unit:</label>
          <select id="unit1" name="unit1">
          </select>
        
        </div>
        <div class="input">
          <input type="text" value="${input}" id="userInput" placeholder="unit">
          <button onclick="calculate()">Kalkuler</button>
          </div>

          <div class="unit2">
          <label for="unit2">Choose a unit:</label>
          <select id="unit2" name="unit2">
          </select>
        </div>
    </div>
    <div class="output">
      <h3 id="userOutput">${output}</h3>
    </div>
    `
    updateUnits("unit1");
    updateUnits("unit2");
}

function updateUnits(unit) {
  const currentUnit = document.getElementById(unit);
  let selected = "";
  for (let i = 0; i < units.length; i++) {
    if (unit == "unit1" && i == unitValue1) {selected = "selected"}
    if (unit == "unit2" && i == unitValue2) {selected = "selected"}
    currentUnit.innerHTML += /*HTML*/`
      <option ${selected} value=${i}>${units[i].name}</option>
    `
    selected = "";
    }
}

updateView();



function calculate() {
    unitValue1 = document.getElementById("unit1").value;
    unitValue2 = document.getElementById("unit2").value;
    const unit1 = units[unitValue1];
    const unit2 = units[unitValue2];
    input = document.getElementById("userInput").value;
    
    const unit1ToUnit = input * unit1.toUnit;
    let rawNumber = unit1ToUnit / unit2.toUnit
    output = Math.round(rawNumber * 100) / 100;
    updateView();
    
}

function skift(skifteTil, klasse1, klasse2, klasse3, klasse4) {
  units = skifteTil;
  distKlasse = klasse1;
  vektKlasse = klasse2;
  speedKlasse = klasse3;
  tidKlasse = klasse4
  updateView();
}