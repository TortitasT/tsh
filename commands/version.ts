import Command from "./command.ts";
import { TSH_VERSION_MSG } from "../_constants.ts";

const version = new Command("version", "Show the version of the shell", () => {
  console.log(TSH_VERSION_MSG);
});

export default version;
