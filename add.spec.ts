import { StringCalculator } from './add';


describe('StringCalculator', () => {
    let calculator: StringCalculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    it('should return 0 when the input is an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

    it('should return the number itself when the input is a single number', () => {
        expect(calculator.add("5")).toBe(5);
    });

    it('should return the sum of two numbers when the input is in the format "number1,number2"', () => {
        expect(calculator.add("1,2")).toBe(3);
    });

    it('should return the sum of multiple numbers when the input is in the format "number1,number2,number3,...,numberN"', () => {
        expect(calculator.add("10,20,30,40")).toBe(100);
        expect(calculator.add("10,20,30,40,50,60,70,80,90,100")).toBe(550);
    });
     it('should handle newlines as delimiters in addition to commas', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });
    it('should handle custom delimiters specified at the beginning of the input', () => {
        expect(calculator.add("//;\n1;2;3")).toBe(6);
        expect(calculator.add("//|\n4|5|6")).toBe(15);
    });
    it('should throw an error when negative numbers are present in the input', () => {
        expect(() => calculator.add("1,-2,3")).toThrow('Negatives not allowed: -2');
        expect(() => calculator.add("-4,5,-6")).toThrow('Negatives not allowed: -4, -6');
    });

    it('should ignore numbers greater than 1000', () => {
        expect(calculator.add("1001,2")).toBe(2);
        expect(calculator.add("1000,2000,3000")).toBe(1000);
    });
    it('should handle delimiters of any length', () => {
        expect(calculator.add("//[***]\n1***2***3")).toBe(6);
    });
    it('should allow multiple delimiters', () => {
        expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
    });
    it('should handle multiple delimiters with length longer than one char', () => {
        expect(calculator.add("//[**][%%]\n1**2%%3")).toBe(6);
    });
});