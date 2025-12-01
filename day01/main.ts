import { run } from "../common.js";

const part1 = (input: string) => {
    const lines = input.split("\n");
    const totalLength = 100;
    let count = 0;

    let currentNumber = 50;
    for (const line of lines) {
        const direction = line.at(0);
        const amount = Number(line.slice(1));

        let nextNumber: number;
        if (direction === "R") {
            nextNumber = (currentNumber + amount) % totalLength;
        } else {
            nextNumber = (currentNumber - amount + totalLength) % totalLength;
        }

        if (nextNumber === 0) {
            count++;
        }

        currentNumber = nextNumber;
    }

    return count;
};

const part2 = (input: string) => {};

const main = () => {
    run(part1, "input.txt", import.meta.url);
    run(part2, "example.txt", import.meta.url);
};

main();
