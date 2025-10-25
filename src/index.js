import { icons } from "lucide";
import { program } from "commander";
import sharp from "sharp";
import toIco from "to-ico";
import * as fs from "fs";
import { ensureFileName, generateSvgString, transformIconName } from "./utils.js";

program
  .name("mkfav")
  .description("Convert lucide icons to favicons")
  .version("0.1.0")
  .requiredOption("-i, --icon <type>", "Icon to convert")
  .option("-o, --output <type>", "Output file name");

program.parse();

async function generateFavicon() {
  try {
    const options = program.opts();
    const iconName = transformIconName(options.icon);
    const outputFileName = ensureFileName(options.output);

    const icon = icons[iconName];
    if (icon === undefined) {
      console.error("Icon does not exist");
      process.exit(1);
    }

    const svgIconString = generateSvgString(icon);

    const pngBuffer = await sharp(Buffer.from(svgIconString))
      .resize(32, 32)
      .png()
      .toBuffer();
    const icoBuffer = await toIco([pngBuffer]);
    fs.writeFileSync(outputFileName, icoBuffer);

    console.log("Icon generated!");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

generateFavicon();
