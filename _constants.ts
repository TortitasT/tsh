import { commands } from "./commands/_commands.ts";
import { colors } from "./_modules.ts";
import { Filesystem } from "./_filesystem.ts";
import filter from "./_filters.ts";

export const PSH_USERNAME = Deno.env.get("UserName") || "tsh";
export const PSH_HOSTNAME = Deno.env.get("ComputerName") || "tsh";

export const OS_SLASH = Deno.build.os == "windows" ? "\\" : "/";

export const TSH_LOGO = colors.brightMagenta(`
  ___________ __  __
 /_  __/ ___// / / /
  / /  \\__ \\/ /_/ / 
 / /  ___/ / __  /  
/_/  /____/_/ /_/   
`);

export const TSH_VERSION = colors.magenta("0.0.5");

export const TSH_WELCOME = `${TSH_LOGO}
Welcome to TSH ${TSH_VERSION}!
https://github.com/TortitasT

Type 'help' to get started.
`;

export const TSH_PROMPT = () => {
  return `${colors.magenta(PSH_USERNAME)}@${colors.blue(PSH_HOSTNAME)} ${
    filter("route", Filesystem.path)
  } ->`;
};

export const TSH_HELP = `
Included commands:

${
  commands.map((command) =>
    `${command.name.padEnd(10)} -> ${command.description}`
  ).join(
    "\n",
  )
}
`;

export const TSH_VERSION_MSG = `TSH ${TSH_VERSION}`;

export const TSH_EXIT_MSG = "Bye!👋";

export const TSH_CLEAR = "\x1Bc";

export const TSH_DEFAULT_MSG = "Command not found";
