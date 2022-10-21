import {
  TSH_CLEAR,
  TSH_DEFAULT_MSG,
  TSH_EXIT_MSG,
  TSH_HELP,
  TSH_PROMPT,
  TSH_VERSION_MSG,
} from "./_constants.ts";
import { Filesystem } from "./_filesystem.ts";

class Command {
  constructor(
    public name: string,
    public description: string,
    public action: Function,
  ) {}
}

const commands: Command[] = [
  new Command("help", "Show this help message", () => {
    console.log(TSH_HELP);
  }),

  new Command("exit", "Exit the shell", () => {
    console.log(TSH_EXIT_MSG);
    Deno.exit();
  }),

  new Command("version", "Show the version of the shell", () => {
    console.log(TSH_VERSION_MSG);
  }),

  new Command("clear", "Clear the screen", () => {
    console.log(TSH_CLEAR);
  }),
  //
  // new Command("ls", "List files in the current directory", () => {
  //   (async () => {
  //     const list = Deno.readDir(Filesystem.path);

  //     for await (const dirEntry of list) {
  //       console.log(dirEntry.name);
  //     }
  //   });
  // }),
  // TODO: Fix this
];

function handleCommands() {
  const input = prompt(TSH_PROMPT);

  commands.some((command, index) => {
    if (input == command.name) {
      command.action();

      return true;
    }

    if (index === commands.length - 1) {
      console.log(TSH_DEFAULT_MSG);
      return true;
    }
  });
}

export { handleCommands };
