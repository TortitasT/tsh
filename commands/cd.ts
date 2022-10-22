import Command from "./command.ts";
import { Filesystem } from "../_filesystem.ts";
import { colors } from "../_modules.ts";
import { OS_SLASH } from "../_constants.ts";

const cd = new Command(
  "cd",
  "Change the current working directory",
  async (args: string[]) => {
    let path = args[1];

    try {
      if (args[1] == "..") {
        path = Filesystem.path.split(OS_SLASH).slice(0, -1).join(OS_SLASH);

        if (
          Filesystem.path.split(OS_SLASH).length <=
            (Deno.build.os == "windows" ? 2 : 1)
        ) {
          path = Filesystem.path.split(OS_SLASH)[0] + OS_SLASH;
        }

        await Deno.stat(path);

        Filesystem.path = path;
      } else {
        path = Filesystem.path + OS_SLASH + args[1];

        await Deno.stat(path);

        Filesystem.path = path;
      }

      console.log(colors.green(Filesystem.path));
    } catch (error) {
      console.log(colors.red(error.message));
    }
  },
);

export default cd;
