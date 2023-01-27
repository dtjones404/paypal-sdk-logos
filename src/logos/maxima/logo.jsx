/* @flow */
/** @jsx node */

import { node, type ComponentNode } from "@krakenjs/jsx-pragmatic/src";

import { getLogoCDNUrl, getSVGs, SVGLogo, type SVGLogoProps } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
import type { LogoColorMap, LogoColorSVGMap } from "../../types";

export const MAXIMA_LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#004A91",
    secondary: "#ED1921",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#004A91",
    secondary: "#ED1921",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#004A91",
    secondary: "#ED1921",
  },
};

const getSVG = ({ primary, secondary }) => {
  return (
    <svg
      width="93px"
      height="20px"
      viewBox="0 0 93 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <polygon
          id="path-1"
          points="0.126046849 0.210564103 13.9960414 0.210564103 13.9960414 19.7435897 0.126046849 19.7435897"
        />
      </defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="SPB_&amp;_AltPay_NewAssets"
          transform="translate(-101.000000, -153.000000)"
        >
          <g id="logo-maxima" transform="translate(101.000000, 153.000000)">
            <path
              d="M24.7684479,3.31769231 L31.0927027,3.31769231 C31.6107,4.85923077 32.1393986,6.37589744 32.679563,7.86205128 C33.3708205,9.79794872 33.9293301,11.3192308 34.3477027,12.4258974 C34.4990507,12.8233333 34.6516726,13.2235897 34.8042945,13.6202564 L34.6631384,16.9894872 L30.5446397,16.9894872 C30.4111274,16.4687179 30.2518808,15.9366667 30.0765822,15.3917949 C29.8329986,14.6961538 29.656426,14.1761538 29.5481384,13.8374359 L24.6869137,13.8374359 L23.3049082,16.9894872 L17.5085877,16.9894872 C18.7168233,14.9294872 19.9696479,12.6705128 21.2706288,10.2146154 C22.4380973,8.01717949 23.6025082,5.72051282 24.7684479,3.31769231 Z M26.1713466,10.3571795 L28.6736836,10.3571795 L27.6769274,7.00128205 L26.1713466,10.3571795 Z"
              id="Fill-1"
              fill={primary}
            />
            <path
              d="M81.6723452,3.31769231 L87.9971096,3.31769231 C88.5140877,4.85923077 89.0417671,6.37589744 89.5832055,7.86205128 C90.2754822,9.79794872 90.8309342,11.3192308 91.2516,12.4258974 C91.8325315,13.9528205 92.4188137,15.4738462 93,16.9894872 L87.4470082,16.9894872 C87.3114575,16.4687179 87.1555233,15.9366667 86.9781863,15.3917949 C86.7371507,14.6961538 86.5605781,14.1761538 86.4505068,13.8374359 L81.5915753,13.8374359 L80.2067671,16.9894872 L74.4119753,16.9894872 C75.618937,14.9294872 76.872526,12.6705128 78.174526,10.2146154 C79.3419945,8.01717949 80.5038575,5.72051282 81.6723452,3.31769231 Z M83.076263,10.3571795 L85.5747781,10.3571795 L84.5803151,7.00128205 L83.076263,10.3571795 Z"
              id="Fill-3"
              fill={primary}
            />
            <path
              d="M58.2832529,3.31807692 L64.9953049,3.31807692 C65.0651186,3.78217949 65.2523926,4.97474359 65.5637515,6.89858974 C65.8231323,8.46730769 65.9920611,9.69115385 66.0746145,10.5621795 C66.3449515,9.41653846 66.7452337,7.9024359 67.2734227,6.01935897 C67.7088666,4.47730769 67.9565268,3.57576923 68.0248118,3.31807692 L74.8996775,3.31807692 C74.8996775,4.79141026 74.8619679,6.30371795 74.7875679,7.85192308 C74.7154611,9.39782051 74.6372392,11.0239744 74.5656419,12.7219231 C74.4904775,14.4196154 74.4530227,15.8429487 74.4530227,16.9888462 L69.9372995,16.9888462 C69.9372995,16.0196154 69.9696584,14.9288462 70.0379433,13.7142308 C70.202031,10.7967949 70.2830556,8.96705128 70.2830556,8.22884615 L67.8235241,16.9888462 L63.3681871,16.9888462 L61.9469433,8.22884615 C61.7958501,9.62141026 61.6679433,11.1034615 61.5588912,12.670641 C61.4498392,14.2398718 61.3950584,15.6798718 61.3950584,16.9888462 L57.1058474,16.9888462 C57.2806364,15.4737179 57.4635789,13.9188462 57.65442,12.3237179 C57.8439871,10.7267949 57.9960995,9.18371795 58.1097378,7.69730769 C58.2251597,6.21192308 58.2832529,4.75064103 58.2832529,3.31807692"
              id="Fill-5"
              fill={primary}
            />
            <path
              d="M50.0900038,3.31807692 L55.5584038,3.31807692 C55.1650011,7.91525641 54.9698285,12.4742308 54.9698285,16.9888462 L50.1251655,16.9888462 L49.461171,16.3744872 C49.4754395,15.2557692 49.525634,14.0047436 49.6109901,12.6201282 C49.7131627,10.9747436 49.8178833,9.27397436 49.9259162,7.51397436 C50.0342038,5.75346154 50.0900038,4.355 50.0900038,3.31807692"
              id="Fill-7"
              fill={primary}
            />
            <path
              d="M1.17743096,3.31807692 L7.8899926,3.31807692 C7.95878712,3.78217949 8.14631589,4.97474359 8.45869397,6.89858974 C8.71552685,8.46730769 8.88522,9.69115385 8.96726384,10.5621795 C9.23963918,9.41653846 9.6386474,7.9024359 10.1676008,6.01935897 C10.6030447,4.47730769 10.8507049,3.57576923 10.9194995,3.31807692 L17.7938556,3.31807692 C17.7938556,4.79141026 17.7556364,6.30371795 17.6812364,7.85192308 C17.6091296,9.39782051 17.5314173,11.0239744 17.4580364,12.7219231 C17.3836364,14.4196154 17.3464364,15.8429487 17.3464364,16.9888462 L12.8304584,16.9888462 C12.8304584,16.0196154 12.8630721,14.9288462 12.932631,13.7142308 C13.0949351,10.7967949 13.1764693,8.96705128 13.1764693,8.22884615 L10.716683,16.9888462 L6.26185562,16.9888462 L4.83882822,8.22884615 C4.68900904,9.62141026 4.56110219,11.1034615 4.45230493,12.670641 C4.3422337,14.2398718 4.29025562,15.6798718 4.29025562,16.9888462 L2.54794521e-05,16.9888462 C0.174050137,15.4737179 0.356992603,13.9188462 0.54732411,12.3237179 C0.737655616,10.7267949 0.890277534,9.18371795 1.00569945,7.69730769 C1.12010219,6.21192308 1.17743096,4.75064103 1.17743096,3.31807692"
              id="Fill-9"
              fill={primary}
            />
            <g id="Group-13" transform="translate(35.161644, 0.045846)">
              <mask id="mask-2" fill="white">
                <use href="#path-1" />
              </mask>
              <g id="Clip-12" />
              <path
                d="M13.9960414,17.0754359 L13.5193208,17.5531282 C13.4044085,17.5285128 13.3037647,17.5190256 13.2135674,17.5190256 C13.0303701,17.5190256 12.8729071,17.6226154 12.7373564,17.828 C12.6698359,17.9638974 12.7513701,18.1431282 12.9760989,18.3746667 C13.065277,18.4656923 13.3167592,18.6572308 13.7239208,18.9572308 L13.7239208,19.0251795 C13.7239208,19.092359 13.7585729,19.3331282 13.825329,19.743641 C12.4433236,19.743641 11.2075701,19.4695385 10.1203619,18.9218462 C9.4420989,18.5805641 8.38674,17.8482564 6.95887151,16.7321026 C6.32596192,16.1867179 5.79955644,15.6851795 5.37940027,15.228 C4.95669616,14.7695385 4.52303589,14.2005641 4.07001123,13.5174872 L0.126046849,16.8015897 L0.228983836,14.338 L2.8113263,11.1905641 C2.33664411,10.6656923 1.91495918,10.0977436 1.55493452,9.48005128 C1.30345233,8.95466667 1.09961671,8.44979487 0.942663288,7.95825641 C0.784945479,7.46569231 0.670287945,6.96235897 0.602512603,6.4354359 C0.716660548,6.21005128 0.772460548,6.04748718 0.772460548,5.958 L0.670287945,5.51312821 L4.34085781,1.74953846 L7.26564411,6.57261538 L12.8387647,0.414666667 C12.9541866,0.27825641 13.0446386,0.210564103 13.11114,0.210564103 C13.2688578,0.210564103 13.3501373,0.518769231 13.3501373,1.13364103 C13.3501373,1.63441026 13.3167592,2.15928205 13.2484742,2.70697436 C13.1801893,3.25517949 13.1330523,3.63158974 13.11114,3.83748718 C12.907814,4.88312821 12.1250852,5.96723077 10.7655016,7.08671795 C9.8607263,7.83953846 9.20259205,8.49005128 8.79517562,9.03594872 C8.92970712,9.35133333 9.04461945,9.60441026 9.13379753,9.78902564 C9.67727425,10.9254359 10.1422742,11.8277436 10.5277784,12.4910769 C11.0931674,13.4482564 11.6287455,14.2572308 12.1250852,14.9192821 C12.6221893,15.578 13.2484742,16.2956923 13.9960414,17.0754359"
                id="Fill-11"
                fill={secondary}
                mask="url(#mask-2)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const getMaximaSVGs = (): LogoColorSVGMap =>
  getSVGs(LOGO.MAXIMA, getSVG, LOGO_COLORS);

export function MaximaLogo({
  logoColor = LOGO_COLOR.BLACK,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const svg = getMaximaSVGs()[logoColor];
  const cdnUrl = getLogoCDNUrl(LOGO.MAXIMA, LOGO_COLORS, logoColor);

  return (
    <SVGLogo
      {...props}
      name={LOGO.MAXIMA}
      logoColor={logoColor}
      cdnUrl={cdnUrl}
      render={() => {
        return svg;
      }}
    />
  );
}
