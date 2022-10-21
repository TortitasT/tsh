const TSH_LOGO = `
  ___________ __  __
 /_  __/ ___// / / /
  / /  \\__ \\/ /_/ / 
 / /  ___/ / __  /  
/_/  /____/_/ /_/   
`;

const TSH_VERSION = "0.0.1";

const TSH_WELCOME = `${TSH_LOGO}
Welcome to TSH ${TSH_VERSION}!

Type 'help' to get started.`;

const TSH_PROMPT = "tsh>";

const TSH_HELP = `
Commands:
  help - Show this help message
  exit - Exit the shell
  version - Show the version of the shell
  clear - Clear the screen
`;

const TSH_VERSION_MSG = `TSH ${TSH_VERSION}`;

const TSH_EXIT_MSG = "Bye!";

const TSH_CLEAR = "\x1Bc";

const TSH_DEFAULT_MSG = "Command not found";

export {
  TSH_CLEAR,
  TSH_DEFAULT_MSG,
  TSH_EXIT_MSG,
  TSH_HELP,
  TSH_PROMPT,
  TSH_VERSION_MSG,
  TSH_WELCOME,
};
