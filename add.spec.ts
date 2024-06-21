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

});