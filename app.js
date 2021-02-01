const inputFahrenheit = document.querySelector("#fahrenheit > input");
const inputCelcius = document.querySelector("#celcius > input");
const inputkelvin = document.querySelector("#kelvin > input");


function roundNum(num){
    return Math.round(num * 100) / 100;
}



function celciusToFahrenheitAndKelvin(){
    const cTemp = parseFloat(inputCelcius.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    inputFahrenheit.value = roundNum(fTemp);
    inputkelvin.value = roundNum(kTemp);
}

function FahrenheitToCelciusAndKelvin(){
    const fTemp = parseFloat(inputFahrenheit.value);
    const cTemp = (fTemp * (9/5)) + 32;
    const kTemp = (fTemp + 459.67) * (5/9);
   inputCelcius.value = roundNum(cTemp);
    inputkelvin.value = roundNum(kTemp);
}

function KelvinToCelciusAndFahrenheit(){
    const kTemp = parseFloat(inputkelvin.value);
    const cTemp = kTemp - 273.13;
    const fTemp = (9/5) * (kTemp - 273) + 32;
   inputCelcius.value = roundNum(cTemp);
   inputFahrenheit.value = roundNum(fTemp);
}


function output(){
    inputCelcius.addEventListener("input", celciusToFahrenheitAndKelvin);
    inputFahrenheit.addEventListener("input", FahrenheitToCelciusAndKelvin);
    inputkelvin.addEventListener("input",  KelvinToCelciusAndFahrenheit);
}


output();