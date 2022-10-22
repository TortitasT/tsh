import { TSH_DEFAULT_MSG, TSH_PROMPT } from "../_constants.ts";
import { colors } from "../_modules.ts";

import Command from "./command.ts";

import ls from "./ls.ts";
import clear from "./clear.ts";
import help from "./help.ts";
import exit from "./exit.ts";
import version from "./version.ts";
import cd from "./cd.ts";
import pwd from "./pwd.ts";
import { Filesystem } from "../_filesystem.ts";

export const commands: Command[] = [
  help,
  exit,
  version,
  clear,
  ls,
  cd,
  pwd,
];

export async function handleCommands() {
  const input = prompt(TSH_PROMPT)?.match(/(?:[^\s"]+|"[^"]*")+/g) || [];

  let found = false;

  for (const command of commands) {
    if (input[0] == command.name) {
      await command.action(input);

      found = true;
      return;
    }
  }

  if (!found) {
    try {
      await Deno.run({
        cmd: [
          "pwsh",
          "-WorkingDirectory",
          Filesystem.path,
          "-Command",
          input.join(" "),
        ],
      }).status();
    } catch {
      console.log(colors.red(TSH_DEFAULT_MSG));
    }

    return;
  }
}
