"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ------------------------------------------------------------------------------------------

function Part1PrintDate() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const norwegianDate = today.toLocaleDateString('no-NB', options);
  printOut(norwegianDate);
}
Part1PrintDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

function Part2GetTodayDate() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  const norwegianDate = today.toLocaleDateString('no-NB', options);
  printOut(`<h5>Today's Date: ${norwegianDate}</h5>`);
  return today;
}

function Part2DaysUntil2XKO(aTodayDate) {
  const releaseDate = new Date('2026-05-14');
  
  const timeDiff = releaseDate - aTodayDate;
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  printOut(`<h3>Days until 2XKO release: ${daysDiff} days</h3><p>Get ready for an epic gaming experience!</p>`);
}
const todayDate = Part2GetTodayDate();
Part2DaysUntil2XKO(todayDate);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");


function Part3CalculateCircle(aRadius) {
  const diameter = 2 * aRadius;
  const circumference = 2 * Math.PI * aRadius;
  const area = Math.PI * aRadius * aRadius;
  printOut(`For a circle with radius ${aRadius}:`);
  printOut(`
    <ul>
      <li>Diameter: ${diameter.toFixed(2)}</li>
      
      <li>Circumference: ${circumference.toFixed(2)}</li>
      <li>Area: ${area.toFixed(2)}</li>
    </ul>
  `);
}
Part3CalculateCircle(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

function Part4CalculateRectangle(aRectangle) {
  
  const circumference = 2 * (aRectangle.width + aRectangle.height);
  const area = aRectangle.width * aRectangle.height;
  printOut(`For a rectangle with width ${aRectangle.width} and height ${aRectangle.height}:`);
  printOut(`
    <ul>
      <li>Circumference: ${circumference.toFixed(2)}</li>
      <li>Area: ${area.toFixed(2)}</li>
    </ul>
  `);
}
Part4CalculateRectangle({ width: 4, height: 7 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

const ETempType = {
  Kelvin: 1,
  Celsius: 2,
  Fahrenheit: 3,
}

function Part5ConvertTemp(aTemp, aTempType){
  let kelvin = 0, celsius = 0, fahrenheit = 0;
  let tempTypeName = "";

  switch(aTempType){
    case ETempType.Kelvin:
      kelvin = aTemp;
      
      celsius = kelvin - 273.15;
      fahrenheit = (kelvin - 273.15) * 9/5 + 32;
      tempTypeName = "Kelvin";
    break;
    case ETempType.Celsius:
      celsius = aTemp;
      kelvin = celsius + 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      tempTypeName = "Celsius";
    break;
    case ETempType.Fahrenheit:
      fahrenheit = aTemp;
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = celsius + 273.15;
      tempTypeName = "Fahrenheit";
    break;
  }
  printOut(`Convert from ${aTemp} ${tempTypeName}:`);
  printOut(`&nbsp;Kelvin: ${Math.round(kelvin)}`);
  printOut(`&nbsp;Celsius: ${celsius.toFixed(0)}`);
  printOut(`&nbsp;Fahrenheit: ${fahrenheit.toFixed(0)}`);
  printOut("");
}

Part5ConvertTemp(300, ETempType.Kelvin);
Part5ConvertTemp(26.85, ETempType.Celsius);
Part5ConvertTemp(80.33, ETempType.Fahrenheit);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

function Part6Calculate(aGrossAmount, aTaxGroup) {
  const taxGroup = aTaxGroup.toLowerCase();
  let taxRate = 0;
  switch (taxGroup) {
    case "normal":
      taxRate = 25;
      break;
    case "food":
      taxRate = 15;
      break;
    case "hotel":
    case "transport":
    case "cinema":
      taxRate = 10;
      break;
    default:
      printOut("Error: Unknown tax group!");
      return;
  }
  const netAmount = (100 * aGrossAmount) / (taxRate + 100);
  printOut(`Gross amount: ${aGrossAmount.toFixed(2)}`);
  printOut(`Tax group: ${aTaxGroup}, Tax rate: ${taxRate}%`);
  printOut(`Net amount: ${netAmount.toFixed(2)}`);
  printOut("");
}

Part6Calculate(100, "Normal");
Part6Calculate(100, "Food");
Part6Calculate(100, "Hotel");
Part6Calculate(100, "Transport");
Part6Calculate(100, "Cinema");
Part6Calculate(100, "Car");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

function Part7CalculateSpeedDistanceTime(aDistance, aTime, aSpeed) {
  if (aSpeed === null) {
    // Calculate speed
    if( !aTime || aTime === 0 || !aDistance ) {
      printOut("Error: Time or Distance cannot be zero or null when calculating speed!");
      return NaN;
    }
    aSpeed = aDistance / aTime;
    printOut(`Calculated Speed: ${aSpeed.toFixed(2)} units/time`);
    return aSpeed;
  } else if (aTime === null) {
    // Calculate time
    if( !aSpeed || aSpeed === 0 || !aDistance ) {
      printOut("Error: Speed or Distance cannot be zero or null when calculating time!");
      return NaN;
    }
    aTime = aDistance / aSpeed;
    printOut(`Calculated Time: ${aTime.toFixed(2)} time units`);
    return aTime;
  } else if (aDistance === null) {
    // Calculate distance
    if( !aSpeed || !aTime) {
      printOut("Error: Speed or Time cannot be null when calculating distance!");
      return NaN;
    }
    aDistance = aSpeed * aTime;
    printOut(`Calculated Distance: ${aDistance.toFixed(2)} units`);
    return aDistance;
  }
}
Part7CalculateSpeedDistanceTime(100, 2, null); // Calculate speed
Part7CalculateSpeedDistanceTime(100, null, 50); // Calculate time
Part7CalculateSpeedDistanceTime(null, 2, 50); // Calculate distance
Part7CalculateSpeedDistanceTime(null, null, 50); // Error case
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

printOut(newLine);
function Part8AdjustString(aText, aMaxSize, aChar, aInsertAtEnd) {
  let adjustedText = aText;
  let length = aText.length;
  while (length < aMaxSize) {
    if (aInsertAtEnd) {
      adjustedText += aChar;
    } else {
      adjustedText = aChar + adjustedText;
    }
    length++;
  }
  printOut(`Adjusted String: "${adjustedText}"`);
  return adjustedText;
}
Part8AdjustString("Hello", 30, "*", true); // Insert at end
Part8AdjustString("World", 25, "#", false); // Insert at beginning
Part8AdjustString("This is a right aligned text.", 50, "&nbsp;", false); // Right align with spaces
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

printOut(newLine);

function Part9TestMathExpression(aLines) {
  let currentNumber = 1;
  for (let line = 1; line <= aLines; line++) {
    let leftSum = 0;
    let rightSum = 0;
    // Calculate left 1 more number than right 
    for (let i = 0; i < line + 1; i++) {
      leftSum += currentNumber++;
    }
    // Calculate right 
    for (let i = 0; i < line; i++) {
      rightSum += currentNumber++;
    }
    if (leftSum !== rightSum) {
      printOut(`Test failed at line ${line}: Left sum (${leftSum}) != Right sum (${rightSum})`);
      return;
    }
  }
  printOut("Maths fun!");
}

Part9TestMathExpression(200);
printOut(newLine);
