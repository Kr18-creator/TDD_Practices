class StringCalculator {
    add(numbers: string): number {
        // If the input is an empty string, return 0
        if (numbers === "") {
            return 0;
        }

        // If the input is a single number, parse and return it
        if (!numbers.includes(",")) {
            return parseInt(numbers);
        }

        // If the input is a comma-separated list of numbers, calculate the sum
        const numberArray = numbers.split(",");
        let sum = 0;

        for (const num of numberArray) {
            sum += parseInt(num);
        }

        return sum;
    }
}

const calculator = new StringCalculator();

console.log(calculator.add("")); // Output: 0
console.log(calculator.add("5")); // Output: 5
console.log(calculator.add("1,2")); // Output: 3
console.log(calculator.add("10,20,30,40")); // Output: 100