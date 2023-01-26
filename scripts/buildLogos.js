/* @flow */

import fs from "fs-extra";
import { $ } from "zx";
import { html } from "@krakenjs/jsx-pragmatic";

import { getSVGFilename } from "../src/lib";
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
  applepay: getApplepaySVGs,
  bancontact: getBancontactSVGs,
  blik: getBlikSVGs,
  boleto: getBoletoSVGs,
  eps: getEpsSVGs,
  giropay: getGiropaySVGs,
  ideal: getIdealSVGs,
  itau: getItauSVGs,
  maxima: getMaximaSVGs,
  mercadopago: getMercadoPagoSVGs,
  multibanco: getMultibancoSVGs,
  mybank: getMybankSVGs,
  oxxo: getOxxoSVGs,
  p24: getP24SVGs,
  paidy: getPaidySVGs,
  payu: getPayuSVGs,
  satispay: getSatispaySVGs,
  sepa: getSepaSVGs,
  sofort: getSofortSVGs,
  trustly: getTrustlySVGs,
  verkkopankki: getVerkkopankkiSVGs,
  wechatpay: getWechatpaySVGs,
  zimpler: getZimplerSVGs,
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
