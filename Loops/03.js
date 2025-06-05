const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your favourite tea: ", (tea) => {
  console.log(`You entered: ${tea}`);
  readline.close();
});
