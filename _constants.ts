import { commands } from "./commands/_commands.ts";
import { colors } from "./_modules.ts";

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

export const TSH_VERSION = colors.magenta("0.0.1");

export const TSH_WELCOME = `${TSH_LOGO}
Welcome to TSH ${TSH_VERSION}!

Type 'help' to get started.
`;

export const TSH_PROMPT = `${colors.magenta(PSH_USERNAME)}@${
  colors.blue(PSH_HOSTNAME)
} ->`;

export const TSH_HELP = `
Commands:
${
  commands.map((command) => `${command.name} -> ${command.description}`).join(
    "\n",
  )
}
`;

export const TSH_VERSION_MSG = `TSH ${TSH_VERSION}`;

export const TSH_EXIT_MSG = "Bye!👋";

export const TSH_CLEAR = "\x1Bc";

export const TSH_DEFAULT_MSG = "Command not found";
