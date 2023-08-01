import {CalculateBMI} from "../data/BmiCalculator";

test('Test Weight in kilogram and Height in Meter', () => {
    const expected=20.90
    const actual=CalculateBMI(70,"kilogram",1.83,"meters")

    expect(parseFloat(actual)).toBeCloseTo(expected, 2);
});test('Test Weight in kilogram and Height in Centimeter', () => {
    const expected=20.93
    const actual=CalculateBMI(70,"kilogram",182.88,"centimeters")
    expect(parseFloat(actual)).toBeCloseTo(expected, 2);
});test('Test Weight in kilogram and Height in Feet ', () => {
    const expected=20.93
    const actual=CalculateBMI(70,"kilogram",6,"feet")
    expect(parseFloat(actual)).toBeCloseTo(expected, 2);
});
test('Test Weight in kilogram and Height in Inches', () => {
    const expected=20.93
    const actual=CalculateBMI(70,"kilogram",72,"inches")
    expect(parseFloat(actual)).toBeCloseTo(expected, 2);
});
test('Test Weight in Pound and Height in Meter', () => {
    const expected=20.90
    const actual=CalculateBMI(154.32,"pound",1.83,"meters")
    expect(parseFloat(actual)).toBeCloseTo(expected, 2);
});test('Test Weight in Pound and Height in Centimeter', () => {
    const expected=20.93
    const actual=CalculateBMI(154.32,"pound",182.88,"centimeters")
    expect(parseFloat(actual)).toBeCloseTo(expected, 2);
});
test('Test Weight in Pound and Height in Feet ', () => {
    const expected=20.93
    const actual=CalculateBMI(154.32,"pound",6,"feet")
    expect(parseFloat(actual)).toBeCloseTo(expected, 2);
});
test('Test Weight in Pound and Height in Inches', () => {
    const expected=20.93
    const actual=CalculateBMI(154.32,"pound",72,"inches")
    expect(parseFloat(actual)).toBeCloseTo(expected, 2);
});