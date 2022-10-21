import { TSH_WELCOME } from "./_constants.ts";
import { handleCommands } from "./_commands.ts";

function main() {
  console.log(TSH_WELCOME);

  while (true) {
    handleCommands();
  }
}

main();
