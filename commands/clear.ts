import Command from "./command.ts";
import { TSH_CLEAR } from "../_constants.ts";

const clear = new Command("clear", "Clear the screen", () => {
  console.log(TSH_CLEAR);
});

export default clear;
