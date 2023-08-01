

function CalculateBMI(weightValue,weightUnit,heightValue,heightUnit) {
    var weightkg
    var heightMeter
    if (weightUnit === "pound") {
        weightkg = weightValue * 0.45359237;
    } else if (weightUnit === "kilogram") {
        weightkg = weightValue;
    }
    if (heightUnit === "centimeters") {
        heightMeter = heightValue / 100;
    } else if (heightUnit === "inches") {
        heightMeter = heightValue * 0.0254;
    } else if (heightUnit === "feet") {

         heightMeter = heightValue * 0.3048;


    } else if (heightUnit === "meters") {
        heightMeter = heightValue;
    }

    const findBmi = weightkg / Math.pow(heightMeter, 2);

    return findBmi.toFixed(2);
}

export {CalculateBMI}