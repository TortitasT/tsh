import { TSH_WELCOME } from "./_constants.ts";
import { handleCommands } from "./commands/_commands.ts";

async function main() {
  console.log(TSH_WELCOME);

  while (true) {
    await handleCommands();
  }
}

main();
