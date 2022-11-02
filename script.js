const cal = () => {
    const tempnum = Number(document.getElementById("temp").value);
    const tempunit = document.getElementById("temp_diff");
    const valuetemp = temp_diff.options[tempunit.selectedIndex].value;
    
    const speednum = Number(document.getElementById("speed").value);
    const speedunit = document.getElementById("speed_diff");
    const valuespeed = speed_diff.options[speedunit.selectedIndex].value;

    const rhnum = Number(document.getElementById("rh").value);

    const apptemp = (intemp, inspeed, inrh) => {
        let result
        let ehpa;
        ehpa = (inrh / 100) * 6.105 * ((Math.E ** ((17.27 * intemp) / (237.7 + intemp))));
        result =  (1.07 * intemp) + (0.2 * ehpa) - (0.65 * inspeed) - 2.7;
        return result;
    }

    let realtemp;
    switch (valuetemp){
        case 'cel':
            realtemp = tempnum;
            // document.getElementById('resContainer').innerHTML= `${realtemp}°Celsius`
            break;
        case 'fah':
            realtemp = (tempnum - 32) * (5 / 9);
            break;
        case 'kel':
            realtemp = (tempnum - 273.15);
            break;
    }
    
    let realspeed;
    switch (valuespeed){
        case 'm/s':
            realspeed = speednum;
            break;
        case 'km/h':
            realspeed = (speednum / 3.6);
            break;
        case 'kts':
            realspeed = (speednum / 1.943844);
            break;
        case 'mph':
            realspeed = (speednum / 2.236936);
            break;
    }

    switch (valuetemp){
        case 'cel':
            appresult = apptemp(realtemp, realspeed, rhnum);
            document.getElementById('resContainer').innerHTML= `${appresult}°Celsius`
            break;
        case 'fah':
            appresult = ((apptemp(realtemp, realspeed, rhnum)) * (9 / 5)) - 32;
            document.getElementById('resContainer').innerHTML= `${appresult}°Fahrenheit`
            break;
        case 'kel':
            appresult = (apptemp(realtemp, realspeed, rhnum)) + 273.15;
            document.getElementById('resContainer').innerHTML= `${appresult} Kelvin`
            break;
    }

}