import Command from "./command.ts";
import { Filesystem } from "../_filesystem.ts";
import { colors } from "../_modules.ts";

const pwd = new Command("pwd", "Print the current working directory", () => {
  console.log(colors.green(Filesystem.path));
});

export default pwd;
