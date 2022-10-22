import Command from "./command.ts";
import { TSH_EXIT_MSG } from "../_constants.ts";

const exit = new Command("exit", "Exit the shell", () => {
  console.log(TSH_EXIT_MSG);
  Deno.exit();
});

export default exit;
