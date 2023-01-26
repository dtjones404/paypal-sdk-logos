/* @flow */

import fs from "fs-extra";
import { $ } from "zx";
import { html } from "@krakenjs/jsx-pragmatic";

// eslint-disable-next-line import/no-namespace
import { getSVGFilename } from "../src/lib";
import { getIdealSVGs } from "../src/logos";

import { getPackage } from "./utils";

const LOGO_GETTERS = { ideal: getIdealSVGs };

async function buildLogos() {
  const version = getPackage().version;

  if (!version) {
    throw new Error(`Package version required`);
  }

  const outdir = `cdn/${version}`;

  await $`mkdir -p ${outdir}`;

  const logoPromises = [];

  for (const [logoName, logoGetter] of Object.entries(LOGO_GETTERS)) {
    // $FlowFixMe
    for (const [logoColor, svg] of Object.entries(logoGetter())) {
      // $FlowFixMe
      const filename = getSVGFilename(logoName, logoColor);
      const filepath = `${outdir}/${filename}`;

      // $FlowFixMe
      logoPromises.push(fs.writeFile(filepath, svg.render(html())));
    }
  }

  // eslint-disable-next-line no-restricted-globals,compat/compat,promise/no-native
  await Promise.all(logoPromises);
}

buildLogos();
