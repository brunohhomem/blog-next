import chalk from "chalk";

export function logColor(...msg: (string | number)[]) {
  const messages = msg
    .map((message) => chalk.bgBlue.whiteBright(message))
    .join(" ");
  console.log(messages);
}
