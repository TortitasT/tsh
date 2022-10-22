import Command from "./command.ts";
import { Filesystem } from "../_filesystem.ts";
import { colors } from "../_modules.ts";
import { OS_SLASH } from "../_constants.ts";

const ls = new Command(
  "ls",
  "List files in the current directory",
  async () => {
    const list = [];

    for await (const dirEntry of Deno.readDir(Filesystem.path)) {
      list.push(dirEntry);
    }

    const folders = list.map((dirEntry) => {
      const { name, isDirectory } = dirEntry;

      if (isDirectory) {
        return colors.blue(`${name + OS_SLASH} `);
      }
    });

    const files = list.map((dirEntry) => {
      const { name, isFile } = dirEntry;

      if (isFile) {
        switch (name.split(".").pop()) {
          case "exe":
            return colors.green(`${name} `);

          default:
            return colors.cyan(`${name} `);
        }
      }
    });

    console.log(folders.join("") + files.join(""));
  },
);

export default ls;
