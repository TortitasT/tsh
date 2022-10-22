import Command from "./command.ts";
import { TSH_HELP } from "../_constants.ts";

const help = new Command("help", "Show this help message", () => {
  console.log(TSH_HELP);
});

export default help;
