/* @flow */
/** @jsx node */

import { node, type ComponentNode } from "@krakenjs/jsx-pragmatic/src";

import { getLogoCDNUrl, getSVGs, SVGLogo, type SVGLogoProps } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
import type { LogoColorMap, LogoColorSVGMap } from "../../types";

export const BLIK_LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#FF0000",
    secondary: "#E83E49",
    tertiary: "#FF00FF",
    quaternary: "#000000",
    senary: "#FFFFFF",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#000000",
    secondary: "#000000",
    tertiary: "#000000",
    quaternary: "#000000",
    senary: "#FFFFFF",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#FF0000",
    secondary: "#E83E49",
    tertiary: "#FF00FF",
    quaternary: "#4D4D4F",
    senary: "#FFFFFF",
  },
};

const getSVG = ({ primary, secondary, tertiary, quaternary, senary }) => {
  return (
    <svg
      width="80"
      height="41"
      viewBox="0 0 80 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.64497 0C2.97516 0 0 2.89801 0 6.47265V6.47265V34.5273C0 38.102 2.97516 41 6.64497 41V41H73.355C77.0248 41 80 38.102 80 34.5273V34.5273V6.47265C80 2.89801 77.0248 0 73.355 0V0H6.64497Z"
        fill="url(#paint0_linear_0_4598)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.9412 35.7368H38.366V6.13281H32.9412V35.7368Z"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M43.0065 35.7371H48.4314V16.1284H43.0065V35.7371Z"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M72.7451 35.7368L64.5932 25.3595L72.0915 16.1282H65.6863L58.4967 25.084V6.13281H53.0719V35.7368H58.4967V25.6694L65.6863 35.7368H72.7451Z"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.1177 30.6755C16.4285 30.6755 14.2484 28.5519 14.2484 25.9325C14.2484 23.3131 16.4285 21.1895 19.1177 21.1895C21.8068 21.1895 23.9869 23.3131 23.9869 25.9325C23.9869 28.5519 21.8068 30.6755 19.1177 30.6755M19.1177 15.9053C17.3561 15.9053 15.6983 16.3372 14.2484 17.0969V6.13281H8.82355V25.9325C8.82355 31.4703 13.4324 35.9597 19.1177 35.9597C24.8029 35.9597 29.4118 31.4703 29.4118 25.9325C29.4118 20.3947 24.8029 15.9053 19.1177 15.9053"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.4117 14.0911C27.0831 14.0911 29.2483 11.9817 29.2483 9.37964C29.2483 6.77779 27.0831 4.66846 24.4117 4.66846C21.7404 4.66846 19.5751 6.77779 19.5751 9.37964C19.5751 11.9817 21.7404 14.0911 24.4117 14.0911Z"
        fill="url(#paint1_radial_0_4598)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_4598"
          x1="80"
          y1="41"
          x2="80"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={quaternary} />
          <stop offset="1" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_0_4598"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(21.5456 6.37273) rotate(54.2299) scale(11.1194 11.2157)"
        >
          <stop stop-color={primary} />
          <stop offset="0.559042" stop-color={secondary} />
          <stop offset="1" stop-color={tertiary} />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const getBlikSVGs = (): LogoColorSVGMap =>
  getSVGs(LOGO.BLIK, getSVG, LOGO_COLORS);

export function BlikLogo({
  logoColor = LOGO_COLOR.BLACK,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const svg = getBlikSVGs()[logoColor];
  const cdnUrl = getLogoCDNUrl(LOGO.BLIK, LOGO_COLORS, logoColor);

  return (
    <SVGLogo
      {...props}
      name={LOGO.BLIK}
      cdnUrl={cdnUrl}
      render={() => {
        return svg;
      }}
    />
  );
}
