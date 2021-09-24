const { program } = require("commander");
program.version("0.0.1");

//------------------------------------------------------------------------------
// ● Define-Options
//------------------------------------------------------------------------------
program
  .option("-h, --hello <name>", "Show a hello message", "stranger")
  .option("-r, --repeat <number>", "Repeat output many times")
  .parse(process.argv);

//------------------------------------------------------------------------------
// ● Execute-Commands
//------------------------------------------------------------------------------
const options = program.opts();
if (options.hello) {
  if (options.repeat) {
    repeat(() => hello(options.hello), options.repeat);
  } else {
    hello(options.hello);
  }
}
askQuestions();

//------------------------------------------------------------------------------
// ● Common-Functions
//------------------------------------------------------------------------------
function hello(name) {
  process.stdout.write(`Hello, ${name}!\n`);
}
function repeat(func, times = 0) {
  let time = 0;
  const interval = setInterval(() => {
    func();
    time++;
    if (time == times) clearInterval(interval);
  }, 0);
}
function askQuestions () {
  process.stdout.write("What do you want ? ");
  process.stdin.on("data", function (data) {
    const answer = data.toString().trim();
    process.stdout.write(`${answer} ? Ok.`);
    process.exit();
  })
}