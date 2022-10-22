import Command from "./command.ts";
import { TSH_WELCOME } from "../_constants.ts";

const welcome = new Command("welcome", "Show the welcome message", () => {
  console.log(TSH_WELCOME);
});

export default welcome;
