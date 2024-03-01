let app = document.getElementById("app");
let input = "";
let unitValue1 = 0;
let unitValue2 = 0;
const units = [
 {
  name: "meter",
  toMeter: 1,
 },
 {
  name: "centimeter",
  toMeter: 0.01,
 },
 {
  name: "millimeter",
  toMeter: 0.001,
 },
 {
  name: "feet",
  toMeter: 0.3048,
 },
 {
  name: "inches",
  toMeter: 0.0254,
 }

]


let output = "";

function updateView() {
    app.innerHTML = /*HTML*/`
      <div class="container">
        <div class="unit1">
          
          <label for="unit1">Choose a unit:</label>
          <select id="unit1" name="unit1">
          </select>
        
        </div>
        <div class="input">
          <input type="text" value="${input}" id="userInput" placeholder="unit">
          <button onclick="calculate()">Calculate</button>
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
    
    const unit1ToMeter = input * unit1.toMeter;
    let rawNumber = unit1ToMeter / unit2.toMeter
    output = Math.round(rawNumber * 100) / 100;
    updateView();
    
    
}