import Command from "./command.ts";
import { printImage } from "../_modules.ts";
import { Filesystem } from "../_filesystem.ts";
import { OS_SLASH } from "../_constants.ts";

const show = new Command("show", "Prints an image.", async (args: string[]) => {
  try {
    const image: Uint8Array = await Deno.readFile(
      Filesystem.path + OS_SLASH + args[1],
    );

    await printImage({
      rawFile: image,
      width: 100,
    });
  } catch (error) {
    console.log(error.message);
  }
});

export default show;
