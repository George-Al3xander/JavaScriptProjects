const funcs = require("./index.js");
const capitalize = funcs.capitalize;
const reverseString = funcs.reverseString;
const calculator = funcs.calculator;
const caesarCipher = funcs.caesarCipher;
const analyzeArray = funcs.analyzeArray;


test("String must be capitalized" , () => {
    expect(capitalize("damn")).toBe("Damn");
});


test("String must be reversed" , () => {
    expect(reverseString("damn")).toBe("nmad");
});

test("Sum wrong" , () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test("Minus wrong" , () => {
    expect(calculator.substract(3, 2)).toBe(1);
});

test("Devide wrong" , () => {
    expect(calculator.divide(3, 2)).toBe(1.5);
});

test("Devide wrong(0 case)" , () => {
    expect(calculator.divide(3, 0)).toBe("Cant divide by 0!");
});

test("Sum mul wrong" , () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test("Something not right!" , () => {
    expect(caesarCipher("hello")).toBe("khoor");
});

test("Average equals to 4" , () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test("Min equals to 1" , () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test("Max equals to 8" , () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test("Length equals to 7" , () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});













