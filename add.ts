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