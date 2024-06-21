export class StringCalculator {
    add(numbers: string): number {
        // If the input is an empty string, return 0
        if (numbers === "") {
            return 0;
        }

        // Check if the input contains a custom delimiter
        let delimiter = ",";
        if (numbers.startsWith("//")) {
            const delimiterLineEndIndex = numbers.indexOf("\n");
            delimiter = numbers.substring(2, delimiterLineEndIndex);
            numbers = numbers.substring(delimiterLineEndIndex + 1);
        }

        // Split the input string by the custom delimiter and new lines
        const numberArray = numbers.split(new RegExp(`${delimiter}|\n`));
        let sum = 0;
        let negatives: number[] = [];

        // Iterate through the array and sum up the numbers
        for (const num of numberArray) {
            const parsedNumber = parseInt(num);
            if (!isNaN(parsedNumber)) {
                if (parsedNumber < 0) {
                    negatives.push(parsedNumber);
                }
                sum += parsedNumber;
            }
        }

        // If there are negative numbers, throw an exception with the negative numbers in the message
        if (negatives.length > 0) {
            const negativeNumbers = negatives.join(", ");
            throw new Error(`Negatives not allowed: ${negativeNumbers}`);
        }

        return sum;
    }
}
