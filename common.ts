import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const run = (
    runner: (file: string) => void,
    input: string,
    callerUrl: string
) => {
    const callerFilename = fileURLToPath(callerUrl);
    const callerDir = path.dirname(callerFilename);

    const inputPath = path.resolve(callerDir, input);

    const file = fs.readFileSync(inputPath, "utf-8").trim();

    const startTime = Date.now();
    const result = runner(file);
    const endTime = Date.now();

    console.log(`Result: ${result}`);
    console.log(`Time: ${endTime - startTime}ms`);
};
