// get refrence of convertion button and input value

const takeInput = document.getElementById('convert-input');
const convertBtn = document.getElementById('convert-btn')

// get refrence to that paragraphs where the converted value will be shown

const lengthConveter = document.querySelector('#group1 p')
const volumeConverter = document.querySelector('#group2 p')
const massConveter = document.querySelector('#group3 p')

convertBtn.addEventListener('click' , clickToConvert)



function clickToConvert() {

  // taken input from input 
 
    const convertedValue = parseFloat(takeInput.value);
 
  

// conversion rates for every converter

const meterToFeet = convertedValue * 3.28084;
const feetToMeter = convertedValue / 3.28084;
const literToGallon = convertedValue / 3.78541;
const gallonToLiter = convertedValue * 3.78541;
const kilogramToPound = convertedValue * 2.20462;
const poundToKilogram = convertedValue / 2.20462;

// injecting the converted values to the paragraphs
if(typeof convertedValue === 'number'){
lengthConveter.textContent =`${convertedValue} meters = ${meterToFeet.toFixed(2)} feet | ${convertedValue} feet = ${feetToMeter.toFixed(2)} meters` 
volumeConverter.textContent = `${convertedValue} liters = ${literToGallon.toFixed(2)} gallons | ${convertedValue} gallons = ${gallonToLiter.toFixed(2)} liters`
massConveter.textContent = `${convertedValue} kilograms = ${kilogramToPound.toFixed(2)} pounds | ${convertedValue} pounds = ${poundToKilogram.toFixed(2)} kilograms`

}
}