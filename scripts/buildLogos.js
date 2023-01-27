/* @flow */

import fs from "fs-extra";
import { $ } from "zx";
import { html } from "@krakenjs/jsx-pragmatic";

import { getSVGFilename } from "../src/lib";
import { LOGO } from "../src/constants";
import {
  getApplepaySVGs,
  getBancontactSVGs,
  getBlikSVGs,
  getBoletoSVGs,
  getEpsSVGs,
  getGiropaySVGs,
  getIdealSVGs,
  getItauSVGs,
  getMaximaSVGs,
  getMercadoPagoSVGs,
  getMultibancoSVGs,
  getMybankSVGs,
  getOxxoSVGs,
  getP24SVGs,
  getPaidySVGs,
  getPayuSVGs,
  getSatispaySVGs,
  getSepaSVGs,
  getSofortSVGs,
  getTrustlySVGs,
  getVerkkopankkiSVGs,
  getWechatpaySVGs,
  getZimplerSVGs,
} from "../src/logos";

import { getPackage } from "./utils";

const LOGO_GETTERS = {
  [LOGO.APPLEPAY]: getApplepaySVGs,
  [LOGO.BANCONTACT]: getBancontactSVGs,
  [LOGO.BLIK]: getBlikSVGs,
  [LOGO.BOLETO]: getBoletoSVGs,
  [LOGO.EPS]: getEpsSVGs,
  [LOGO.GIROPAY]: getGiropaySVGs,
  [LOGO.IDEAL]: getIdealSVGs,
  [LOGO.ITAU]: getItauSVGs,
  [LOGO.MAXIMA]: getMaximaSVGs,
  [LOGO.MERCADOPAGO]: getMercadoPagoSVGs,
  [LOGO.MULTIBANCO]: getMultibancoSVGs,
  [LOGO.MYBANK]: getMybankSVGs,
  [LOGO.OXXO]: getOxxoSVGs,
  [LOGO.P24]: getP24SVGs,
  [LOGO.PAIDY]: getPaidySVGs,
  [LOGO.PAYU]: getPayuSVGs,
  [LOGO.SATISPAY]: getSatispaySVGs,
  [LOGO.SEPA]: getSepaSVGs,
  [LOGO.SOFORT]: getSofortSVGs,
  [LOGO.TRUSTLY]: getTrustlySVGs,
  [LOGO.VERKKOPANKKI]: getVerkkopankkiSVGs,
  [LOGO.WECHATPAY]: getWechatpaySVGs,
  [LOGO.ZIMPLER]: getZimplerSVGs,
};

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
