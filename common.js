import fs from 'fs';

export const run = (runner, input) => {
  const file = fs.readFileSync(input, 'utf-8').trim();

  const startTime = Date.now();
  const result = runner(file);
  const endTime = Date.now();

  console.log(`Result: ${result}`);
  console.log(`Time: ${endTime - startTime}ms`);
}
