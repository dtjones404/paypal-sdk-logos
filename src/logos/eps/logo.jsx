/* @flow */
/** @jsx node */

import { node, type ComponentNode } from "@krakenjs/jsx-pragmatic/src";

import { SVGLogo, getLogoColors, type SVGLogoProps } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
import { type LogoColorMap } from "../../types";

const LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#C8036F",
    secondary: "#71706F",
  },
};

const getSVG = ({ primary, secondary }) => {
  return (
    <svg
      width="74"
      height="46"
      viewBox="0 0 74 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M70.8255 42.7702C70.8255 43.2475 71.1362 43.5376 71.5829 43.5376C72.786 43.5376 73.1082 41.6788 71.9046 41.6788C71.334 41.6788 70.8255 42.1049 70.8255 42.7702ZM70.6616 44.378C70.6221 44.7627 70.9158 44.9183 71.4076 44.9183C71.837 44.9183 72.3004 44.677 72.4077 44.0632L72.4924 43.5843C72.2382 43.9424 71.7748 44.0838 71.4303 44.0838C70.7182 44.0838 70.2211 43.6573 70.2211 42.884C70.2211 41.7814 71.0345 41.1445 71.9554 41.1445C72.3455 41.1445 72.6958 41.3308 72.8201 41.6492L72.9162 41.2047H73.4812L72.9951 44.0763C72.8145 45.1394 72.029 45.4693 71.3115 45.4693C70.4526 45.4693 69.9782 45.0511 70.0966 44.378H70.6616Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M68.689 43.9934L68.9547 42.5008C69.0392 42.0175 68.8757 41.6974 68.3445 41.6974C67.8812 41.6974 67.4912 42.0723 67.4122 42.5328L67.158 43.9934H66.576L67.0676 41.2048H67.5986L67.5591 41.6123C67.8812 41.311 68.2144 41.1625 68.576 41.1625C69.254 41.1625 69.6949 41.637 69.5424 42.4955L69.2768 43.9934H68.689Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M64.0209 41.2047L63.7555 42.7064C63.6707 43.1841 63.8855 43.5141 64.3713 43.5141C64.829 43.5141 65.2188 43.1326 65.2978 42.6665L65.552 41.2047H66.134L65.6426 43.9934H65.1171L65.1566 43.5893C64.829 43.9019 64.5068 44.0493 64.1171 44.0493C63.4334 44.0493 63.0266 43.5562 63.1734 42.7095L63.439 41.2047H64.0209Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M62.184 41.8945C62.0032 41.6899 61.7716 41.6331 61.4948 41.6331C61.1104 41.6331 60.8393 41.7639 60.8393 42.0083C60.8393 42.2129 61.0595 42.2984 61.3874 42.3267C61.8959 42.3721 62.5456 42.5427 62.41 43.2646C62.314 43.7875 61.7942 44.0945 61.0709 44.0945C60.619 44.0945 60.1838 43.9922 59.8901 43.5772L60.2686 43.1623C60.4777 43.452 60.845 43.5716 61.1726 43.5772C61.4494 43.5772 61.7772 43.4749 61.8281 43.2135C61.8789 42.9633 61.6585 42.8668 61.2518 42.8268C60.7771 42.7813 60.2574 42.6053 60.2574 42.0766C60.2574 41.3773 61.0087 41.1329 61.5739 41.1329C62.0032 41.1329 62.3197 41.2295 62.5796 41.5082L62.184 41.8945Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M59.0873 40.4451C59.0873 40.644 59.2343 40.7467 59.3926 40.7467C59.6185 40.7467 59.8275 40.5986 59.8275 40.3203C59.8275 40.1325 59.6862 40.0244 59.5336 40.0244C59.3246 40.0244 59.0873 40.1611 59.0873 40.4451ZM59.6014 41.2048L59.11 43.9934H58.528L59.0195 41.2048H59.6014Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M57.5325 42.3586C57.5776 41.8778 57.2952 41.6822 56.8261 41.6822C56.4025 41.6822 56.0127 41.8778 55.843 42.3586H57.5325ZM55.7471 42.8395C55.7244 43.2241 56.0239 43.5382 56.5324 43.5382C56.815 43.5382 57.1877 43.427 57.3911 43.2338L57.7076 43.6017C57.363 43.9198 56.8544 44.0782 56.4251 44.0782C55.6228 44.0782 55.1538 43.5948 55.1538 42.8558C55.1538 41.8724 55.9222 41.1395 56.9053 41.1395C57.8037 41.1395 58.3122 41.6855 58.0071 42.8395H55.7471Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M52.994 41.2047L53.2877 43.4101L54.35 41.2047H54.9997L53.5421 43.9934H52.8584L52.5816 42.1537L52.1352 43.0676L51.6493 43.9934H50.9713L50.4797 41.2047H51.1352L51.4234 43.4101L52.4911 41.2047H52.994Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M48.6765 41.2048L48.6483 41.5755C48.9196 41.217 49.2472 41.1439 49.5466 41.1439C49.8179 41.1439 50.0607 41.2408 50.1907 41.3828L49.8405 41.8945C49.7162 41.7811 49.5919 41.7242 49.3771 41.7242C48.9759 41.7242 48.5806 41.9663 48.4901 42.4836L48.2247 43.9934H47.6426L48.1341 41.2048H48.6765Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.6473 42.3586C46.6925 41.8778 46.41 41.6822 45.941 41.6822C45.5174 41.6822 45.1275 41.8778 44.9578 42.3586H46.6473ZM44.8619 42.8395C44.8392 43.2241 45.1387 43.5382 45.6472 43.5382C45.9298 43.5382 46.3025 43.427 46.5059 43.2338L46.8224 43.6017C46.4778 43.9198 45.9692 44.0782 45.5399 44.0782C44.7376 44.0782 44.2686 43.5948 44.2686 42.8558C44.2686 41.8724 45.037 41.1395 46.0201 41.1395C46.9185 41.1395 47.427 41.6855 47.1219 42.8395H44.8619Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M41.3068 42.7531C41.2843 43.2192 41.5836 43.5204 42.0187 43.5204C42.5668 43.5204 43.0978 43.094 43.1317 42.4461C43.1544 41.9743 42.8493 41.6957 42.4254 41.6957C41.883 41.6957 41.3406 42.1335 41.3068 42.7531ZM41.7475 40.0508L41.465 41.652C41.7079 41.3225 42.1938 41.1482 42.5328 41.1482C43.2334 41.1482 43.7193 41.5613 43.7193 42.3285C43.7193 43.4143 42.9678 44.0672 42.0074 44.0672C41.6345 44.0672 41.318 43.9278 41.126 43.5754L41.0187 43.9934H40.4705L41.1655 40.0508H41.7475Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M39.1244 39.3196C39.1244 39.5185 39.2769 39.6094 39.4408 39.6094C39.6159 39.6094 39.8476 39.4673 39.8476 39.2059C39.8476 39.0185 39.7119 38.9161 39.5594 38.9161C39.356 38.9161 39.1244 39.0467 39.1244 39.3196ZM37.7683 39.3253C37.7683 39.5185 37.9153 39.6094 38.0735 39.6094C38.2712 39.6094 38.486 39.4673 38.486 39.2002C38.486 39.0127 38.3615 38.9161 38.1977 38.9161C37.9944 38.9161 37.7683 39.0467 37.7683 39.3253ZM40.2317 40.0508L39.8249 42.3681C39.6216 43.5393 38.8587 44.0757 37.8248 44.0757C36.9491 44.0757 36.271 43.5015 36.4689 42.37L36.8756 40.0508H37.5029L37.0959 42.3681C36.9716 43.0904 37.2937 43.5015 37.9039 43.5015C38.5311 43.5015 39.0679 43.1262 39.1978 42.37L39.6045 40.0508H40.2317Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M57.634 22.7419V22.7419H51.7796C51.1285 22.7419 50.5987 22.22 50.5987 21.5666C50.5987 20.9132 51.1285 20.3379 51.7796 20.3379H60.6925V15.9146H51.7796C48.6688 15.9146 46.1378 18.4661 46.1378 21.588C46.1378 24.71 48.6688 27.2615 51.7796 27.2615H57.5544C58.2056 27.2615 58.7354 27.7813 58.7354 28.4347C58.7354 29.0881 58.2056 29.5693 57.5544 29.5693H45.1711C44.1197 31.5887 43.0974 33.3196 41.0221 34.185H57.634C60.6925 34.1407 63.1943 31.5366 63.1943 28.4422C63.1943 25.3481 60.6925 22.7863 57.634 22.7419"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.1918 29.5693H30.6807V25.0146C30.6807 22.4694 32.6949 20.3987 35.1918 20.3987C37.6887 20.3987 39.72 22.4694 39.72 25.0146C39.72 27.5599 37.6887 29.5693 35.1918 29.5693ZM35.1918 15.9146C30.2299 15.9146 26.1885 20.0047 26.1885 25.0306V25.2229V43.9934H30.6807V34.185H35.1824C40.1444 34.185 44.1715 30.0404 44.1715 25.0146C44.1715 19.9888 40.1537 15.9146 35.1918 15.9146Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.18185 27.1618C4.14824 31.14 7.71916 34.1851 11.9667 34.1851H23.8417C23.5628 35.8198 22.1192 37.0699 20.3888 37.0699H3.50596C1.57766 37.0699 -6.10352e-05 35.4346 -6.10352e-05 33.4945V16.509C-6.10352e-05 14.5689 1.57766 13.0298 3.50596 13.0298H20.3888C22.3171 13.0298 23.8946 14.617 23.8946 16.557L23.8783 29.5694H11.9667C10.1418 29.5694 8.5592 28.7039 7.7767 27.1654H21.0272V24.9587C21.0272 19.941 16.9348 15.8621 11.9474 15.8621C7.70683 15.8621 4.14022 18.8171 3.16694 22.7854C3.16694 22.7854 2.90266 24.1143 2.90266 24.9804C2.90266 25.8465 3.18185 27.1618 3.18185 27.1618ZM7.76285 22.742C8.5485 21.2996 10.1295 20.1799 11.9474 20.1799C13.7656 20.1799 15.3464 21.2996 16.1321 22.742H7.76285Z"
        fill={primary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.5936 7.50619C19.5936 3.36061 16.1692 0 11.9451 0C7.79097 0 4.41236 3.2507 4.3014 7.30127C4.29958 7.31838 4.30101 7.33502 4.30101 7.35262V9.60835C4.30101 9.87817 4.51941 10.1449 4.7943 10.1449H7.60823C7.88311 10.1449 8.12416 9.87817 8.12416 9.60835V7.50619C8.12416 5.43604 9.83789 3.75179 11.9473 3.75179C14.0567 3.75179 15.7705 5.43604 15.7705 7.50619V9.60835C15.7705 9.87817 15.9934 10.1449 16.2683 10.1449H19.0824C19.3572 10.1449 19.5936 9.87817 19.5936 9.60835V7.50619Z"
        fill={primary}
      />
    </svg>
  );
};

export function EpsLogo({
  logoColor = LOGO_COLOR.BLACK,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const { primary, secondary } = getLogoColors(
    LOGO.EPS,
    LOGO_COLORS,
    logoColor
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.EPS}
      logoColor={logoColor}
      render={() => {
        return;
      }}
    />
  );
}
