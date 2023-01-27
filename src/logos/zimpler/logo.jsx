/* @flow */
/** @jsx node */

import {
  node,
  type ElementNode,
  type ComponentNode,
} from "@krakenjs/jsx-pragmatic/src";

import {
  getLogoCDNUrl,
  getLogoColors,
  SVGLogo,
  type SVGLogoProps,
} from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
import type { LogoColors, LogoColorMap } from "../../types";

export const ZIMPLER_LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#00A599",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#FFFFFF",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#00A599",
  },
};

export const getZimplerSVG = ({ primary }: LogoColors): ElementNode => {
  return (
    <svg
      width="127"
      height="32"
      viewBox="0 0 127 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
    >
      <g
        transform="matrix(2.2546708,0,0,2.0580615,0.70028058,1.3242473)"
        fill={primary}
      >
        <path d="m 44.363387,6.5973104 c 0.2184,-1.0706901 1.091377,-1.9895312 2.0692,-1.9895312 0.550355,0 0.9492,0.4072031 0.806711,0.8621302 L 44.211564,7.544662 c 0.05693,-0.5305417 0.151823,-0.9473516 0.151823,-0.9473516 z m -14.0476,2.5296797 0.474755,-2.719026 c 0.208756,-0.6442735 0.968178,-1.5064037 1.755911,-1.5538178 0.303645,-0.018904 0.664534,-0.00961 1.006134,0.2652709 0.294311,0.3315885 0.446133,0.8243229 0.446133,1.4400859 0,1.9421172 -0.9492,3.287375 -2.2876,3.287375 -0.664222,-0.0093 -1.186267,-0.3504922 -1.395333,-0.719888 z M 55.857698,2.8454016 c -1.138978,-0.056711 -2.6292,1.3359609 -2.6292,1.3359609 l -0.474756,-1.184112 h -1.300133 l -0.626578,3.543349 c -0.04729,0.2460573 -0.1708,0.4642239 -0.370222,0.615763 l -1.717956,1.3452578 c 0,0 -0.702177,0.5401484 -1.68,1.1652083 -0.445822,0.2181667 -0.806711,0.3126849 -1.176933,0.3126849 -0.787733,0 -1.281156,-0.3030781 -1.508889,-0.8243229 -0.03827,-0.094518 -0.06658,-0.1989531 -0.0952,-0.2934713 l 4.404089,-2.975 C 49.317831,5.441399 49.308498,4.8352427 49.222942,4.5318547 48.938276,3.5845031 48.083964,2.873912 46.669964,2.873912 c -2.638844,0 -4.451688,2.2455052 -4.451688,5.438362 0,0.2178567 0.0096,0.4261067 0.03795,0.6250599 l -1.252844,0.8813437 c -0.246711,0.1515391 -0.597956,0.2841744 -0.816356,0.2841744 -0.379555,0 -0.541022,-0.2937812 -0.417511,-0.9284478 L 41.40192,0.04115417 39.361342,0.02225052 38.544987,4.5699719 c -0.03796,0.1893463 -0.1232,0.3693958 -0.256045,0.5113281 l -2.249644,2.3685338 c 0.05693,-0.3882994 0.08555,-0.8051093 0.08555,-1.2408229 0,-1.9235234 -0.892266,-3.3443958 -2.391822,-3.3443958 -1.452267,0 -2.534311,1.2219193 -2.534311,1.2219193 L 30.629076,2.9972505 H 29.34792 L 28.645431,7.0048234 C 28.616809,7.184563 28.540898,7.3457088 28.417698,7.4783443 L 27.10792,9.0225552 C 26.747031,9.4111646 26.367476,9.8942922 26.177698,9.903899 25.835787,9.96061 25.683964,9.837581 25.797831,9.2026047 l 0.522045,-2.8990755 c 0.408177,-2.2926094 -0.294,-3.4485209 -2.268312,-3.4485209 -1.176933,0 -2.562622,1.3170573 -2.562622,1.3170573 -0.294311,-0.8624401 -1.015778,-1.3170573 -2.107155,-1.3170573 -1.195911,0 -2.487023,1.3926719 -2.487023,1.3926719 L 16.363387,3.0065474 H 15.062942 L 14.39872,6.7962635 C 14.370098,6.976313 14.294187,7.1374588 14.170987,7.2700943 L 12.680764,9.032162 c -0.360888,0.3886094 -0.740444,0.871737 -0.930222,0.8810338 -0.3416,0.057021 -0.493733,-0.066318 -0.379555,-0.7009843 L 12.50032,3.0065474 h -2.059556 l -0.332266,1.8286953 c -0.0476,0.2367604 -0.1518224,0.464224 -0.3132891,0.6439635 L 6.7864533,8.9469406 C 6.0080533,9.7805604 5.0305422,9.903899 4.83112,9.9131958 H 2.7049867 L 7.5362311,4.4562401 7.7829422,2.978037 H 1.5756533 L 1.2813422,4.6362896 H 4.8880533 L 0.22792,10.093245 -1.2444444e-4,11.637456 c 0,0 4.36613334444,0.01921 4.44204444444,0 1.2814667,0 2.4204444,-1.127401 2.8759111,-1.591625 L 9.6433867,7.3079016 9.2258756,9.6101177 c -0.266,1.4967973 0.3129777,2.2073883 1.5471554,2.1791873 0.759111,-0.01921 1.281156,-0.521245 1.8032,-1.04218 l 1.404667,-1.6390385 -0.465111,2.6431015 h 2.059866 l 0.9016,-5.182388 c 0.113867,-0.6442734 0.939556,-1.7335573 1.803511,-1.7335573 0.911245,0 1.347734,0.4450104 1.138978,1.6672396 l -0.920889,5.2394087 h 2.040889 l 0.987156,-5.5709973 c 0.05693,-0.3693958 0.721155,-1.4115755 1.642044,-1.4115755 0.958534,0 1.271822,0.5209349 1.063067,1.7431641 l -0.569645,3.0980286 c -0.265688,1.4971071 0.313289,2.2076981 1.547156,2.1791871 0.759422,-0.0189 1.281467,-0.520934 1.803511,-1.042179 l 1.214889,-1.4211825 -0.427156,2.4348515 -0.493733,2.813854 h 2.059867 l 0.664222,-3.827523 c 0.284667,0.360099 0.683511,0.65388 1.176933,0.805419 0.113867,0.03781 0.227734,0.06632 0.351245,0.08522 1.328755,0.06632 2.515333,-0.577955 3.568755,-1.676846 l 0.0096,-0.00961 2.989778,-3.0887317 -0.484089,2.7004323 c -0.265689,1.4967974 0.303644,2.1788774 1.547155,2.1884844 0.806711,0 1.556489,-0.397906 2.344222,-0.928448 l 1.044089,-0.748708 c 0.01898,0.03812 0.03796,0.08553 0.05693,0.123338 0.474755,0.918842 1.348044,1.525308 2.638844,1.534915 h 0.0093 c 1.357378,0 2.686134,-1.279251 3.454889,-1.8190892 0.199423,-0.1422422 0.939867,-0.7391016 1.736934,-1.383375 L 49.906371,11.73228 h 2.059556 L 52.86792,6.5498963 c 0.113867,-0.6442734 0.939556,-1.7338671 1.8032,-1.7338671 0.332267,0 0.597956,0.057021 0.797378,0.1896562 z" />
        <g transform="translate(10.577778,-0.309896)">
          <path d="m 1.0778133,2.4638268 c 0.6835111,0 1.3287556,-0.5401484 1.4332889,-1.2033255 C 2.6153244,0.59732422 2.1502133,0.05748568 1.4670133,0.04787891 c -0.68351108,0 -1.32875552,0.54014843 -1.43328886,1.20332549 -0.11386666,0.672474 0.35124445,1.2126224 1.04408886,1.2126224" />
        </g>
      </g>
    </svg>
  );
};

export function ZimplerLogo({
  logoColor = LOGO_COLOR.BLACK,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const svg = getZimplerSVG(
    getLogoColors(LOGO.ZIMPLER, ZIMPLER_LOGO_COLORS, logoColor)
  );
  const cdnUrl = getLogoCDNUrl(LOGO.ZIMPLER, ZIMPLER_LOGO_COLORS, logoColor);

  return (
    <SVGLogo
      {...props}
      name={LOGO.ZIMPLER}
      logoColor={logoColor}
      cdnUrl={cdnUrl}
      render={() => {
        return svg;
      }}
    />
  );
}
