export class StringCalculator {
    add(numbers: string): number {
        // If the input is an empty string, return 0
        if (numbers === "") {
            return 0;
        }

        // Split the input string by commas and new lines
        const numberArray = numbers.split(/,|\n/);
        let sum = 0;

        // Iterate through the array and sum up the numbers
        for (const num of numberArray) {
            const parsedNumber = parseInt(num);
            if (!isNaN(parsedNumber)) {
                sum += parsedNumber;
            }
        }

        return sum;
    }
}

const calculator = new StringCalculator();

console.log(calculator.add("")); // Output: 0
console.log(calculator.add("5")); // Output: 5
console.log(calculator.add("1\n2,3")); // Output: 6
console.log(calculator.add("10,20,30,40")); // Output: 100
console.log(calculator.add("10,20,30,40,50,60,70,80,90,100")); // Output: 550
console.log(calculator.add("1\n2,3")); // Output: 6