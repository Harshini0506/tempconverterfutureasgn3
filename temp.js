const tempid=document.getElementById('temperatureinput');
const unitselect=document.getElementById('unit-select');
const convertbtn=document.getElementById('convert-button');
const result=document.getElementById('result');

convertbtn.addEventListener('click',()=>{
    const temperature=tempid.value.trim();
    const unit=unitselect.value;

    if(!/^-?\d*\.?\d+$/.test(temperature)){
        result.textContent='Please enter a valid number';
        return;
    }

    const temperatureValue=parseFloat(temperature);

    if(!unit){
        result.textContent='Please select a conversion unit';
        return;
    }

    let convertedTemperature,convertedunit;
    if(unit=='celsius'){
        convertedTemperature=(temperatureValue*9/5)+32;
        convertedunit='Fahrenheit';
    }else if(unit=='fahrenheit'){
        convertedTemperature=(temperatureValue-32)*5/9;
        convertedunit='Celsius';
    }else if(unit=='kelvin'){
        if(temperatureValue<0){
        result.textContent='Kelvin cannot be negative';
        return;
        }

        convertedTemperature=temperatureValue-273.15;
        convertedunit='Celsius';
    }

    result.textContent=`${temperatureValue} degrees ${unitselect.options[unitselect.selectedIndex].text.split(' ')[0]} is equal to ${convertedTemperature.toFixed(2)} degrees ${convertedunit}.`;
});