export class StringCalculator {
    add(numbers: string): number {
        // If the input is an empty string, return 0
        if (numbers === "") {
            return 0;
        }

        let delimiters = [",", "\n"]; // Default delimiters

        // Check if the input contains a custom delimiter
        if (numbers.startsWith("//")) {
            const delimiterEndIndex = numbers.indexOf("\n");
            const delimiterSection = numbers.substring(2, delimiterEndIndex);

            if (delimiterSection.startsWith("[") && delimiterSection.endsWith("]")) {
                // Multiple custom delimiters
                const customDelimiters = delimiterSection.match(/\[(.*?)\]/g);
                if (customDelimiters) {
                    delimiters = customDelimiters.map(d => d.slice(1, -1));
                }
            } else {
                // Single custom delimiter
                delimiters = [delimiterSection];
            }

            numbers = numbers.substring(delimiterEndIndex + 1);
        }

        // Escape delimiters for use in regex
        const escapedDelimiters = delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        const delimiterRegex = new RegExp(escapedDelimiters.join("|"));

        // Split the input string by the custom delimiters and new lines
        const numberArray = numbers.split(delimiterRegex);
        let sum = 0;
        let negatives: number[] = [];

        // Iterate through the array and sum up the numbers
        for (const num of numberArray) {
            const parsedNumber = parseInt(num);
            if (!isNaN(parsedNumber)) {
                if (parsedNumber < 0) {
                    negatives.push(parsedNumber);
                }
                if (parsedNumber <= 1000) {
                    sum += parsedNumber;
                }
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
