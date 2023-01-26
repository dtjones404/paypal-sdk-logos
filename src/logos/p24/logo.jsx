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
    primary: "#B3B1B1",
    secondary: "#D03238",
  },
};

const getSVG = ({ primary, secondary }) => {
  return (
    <svg
      width="90"
      height="31"
      viewBox="0 0 90 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M86.0712 22.5234L81.7899 22.5168L87.0011 16.8521L86.0712 22.5234ZM88.0945 22.5218L89.4659 14.1299L87.0361 14.1284L79.4644 22.4259L79.1205 24.5271L85.7423 24.5264L85.2577 27.4748L87.2889 27.4775L87.7686 24.5266L89.6445 24.5306L89.9834 22.5192L88.0945 22.5218Z"
        fill={primary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M69.6586 18.8087L71.7061 18.8116L71.828 18.001C71.828 18.001 72.047 16.5388 72.5347 16.2563C72.6909 16.1658 72.9415 16.0797 73.2313 16.0283C73.7662 15.9336 74.449 15.9226 75.0014 15.9429C75.8536 15.9743 76.1721 15.982 77.0384 16.0825C77.9049 16.1831 77.6839 17.0365 77.6839 17.0365L77.5144 18.3091C77.5144 18.3091 77.4404 18.8792 77.2405 19.2353C77.0637 19.5503 76.5814 19.7621 76.3022 19.8552C75.6278 20.0796 73.3199 20.6782 73.3199 20.6782L71.504 21.2125C71.504 21.2125 70.3895 21.5421 69.7636 22.2471C69.138 22.9523 68.8919 23.7541 68.8064 24.1729C68.7209 24.5913 68.2415 27.4738 68.2415 27.4738L78.0345 27.478L78.3609 25.4803L70.6153 25.4893L70.7548 24.6754C70.7548 24.6754 70.8447 23.8361 71.1776 23.5624C71.2826 23.4757 71.3351 23.361 71.9534 23.1361C72.3223 23.0018 73.5858 22.6583 73.5858 22.6583L76.5084 21.8449C76.5084 21.8449 78.1028 21.4259 78.7308 20.5385C79.3588 19.6514 79.6005 17.9505 79.6005 17.9505C79.6005 17.9505 79.7694 16.2994 79.6406 15.7817C79.5121 15.2641 79.0321 14.6424 78.45 14.3775C77.8677 14.1125 77.2574 13.9574 75.4938 13.982C73.7305 14.0069 72.8598 14.0909 71.9672 14.4259C71.0746 14.7605 70.559 15.3715 70.2305 16.2326C69.8682 17.0458 69.6586 18.8087 69.6586 18.8087"
        fill={primary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M62.1771 17.8525L63.425 24.8872L66.956 17.8452L68.942 17.8625L63.8546 27.9207C63.8546 27.9207 62.9342 29.7408 62.363 30.2026C61.7921 30.6648 61.4432 30.8715 60.9761 30.9186C60.5092 30.966 60.3218 30.9992 59.8737 30.9186L59.4003 30.8338L59.6964 29.0378C59.6964 29.0378 60.4829 29.1888 60.9514 29.0002C61.4198 28.8112 61.7986 27.9971 61.7986 27.9971L62.0348 27.5898L60.1962 17.8498L62.1771 17.8525Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.7465 17.8512L48.6127 17.8496L49.2717 24.6213L52.1424 17.8374L54.4456 17.8438L55.1263 24.6492L57.9973 17.8501L59.9334 17.8483L55.8187 27.4703L53.5199 27.4705L52.8578 20.7329L49.9532 27.4706L47.6935 27.4771L46.7465 17.8512Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M44.2793 21.4381L39.9338 21.4336L40.1067 20.7294C40.1067 20.7294 40.2576 20.179 40.559 19.9442C40.8603 19.7093 41.2456 19.6691 41.6087 19.6332C41.9719 19.5976 42.9325 19.5281 43.7172 19.6934C43.9774 19.7477 44.2251 19.8971 44.2897 20.1187C44.4419 20.6411 44.2793 21.4381 44.2793 21.4381ZM44.719 17.9348C44.1734 17.7533 43.2264 17.7174 42.4271 17.7277C41.6523 17.7374 41.297 17.7744 41.0079 17.838C41.0079 17.838 39.6296 18.0399 38.8475 19.0284C38.0655 20.0174 37.8322 22.1808 37.8322 22.1808C37.8322 22.1808 37.3679 24.5721 37.5037 25.3688C37.6395 26.1655 37.8827 26.9035 38.7678 27.2506C39.6526 27.5972 40.4031 27.5817 40.4031 27.5817C40.4031 27.5817 41.9802 27.7078 43.1682 27.4213C44.3564 27.1348 44.9828 26.2812 44.9828 26.2812C44.9828 26.2812 45.2615 25.9141 45.4625 25.4757C45.6638 25.0374 45.7227 24.7328 45.7318 24.6953L45.8564 24.1787L43.8361 24.1814C43.8361 24.1814 43.7248 25.5419 42.6356 25.6671C41.5467 25.7926 40.9623 25.7455 40.7519 25.7375C40.5444 25.7296 39.3742 25.7786 39.4689 24.7833C39.4695 24.7698 39.4703 24.7502 39.4716 24.7221C39.5258 23.5868 39.6494 23.2926 39.6494 23.2926L45.9907 23.2745L46.2612 21.6765C46.5694 19.8583 46.3431 18.4755 44.719 17.9348Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.3523 14.1339L38.2978 14.1323L36.1179 27.4787L34.1674 27.4755L36.3523 14.1339Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.3343 21.4405L27.9886 21.4357L28.1615 20.7319C28.1615 20.7319 28.3124 20.1815 28.6138 19.9464C28.9154 19.7115 29.3007 19.6716 29.6636 19.6357C30.0267 19.5996 30.9876 19.5306 31.772 19.6955C32.0324 19.7501 32.2801 19.8995 32.3445 20.1209C32.4967 20.6433 32.3343 21.4405 32.3343 21.4405ZM32.7569 17.9324C32.2115 17.751 31.2644 17.7151 30.4652 17.7252C29.6904 17.735 29.3351 17.772 29.046 17.8356C29.046 17.8356 27.6677 18.0372 26.8857 19.026C26.1036 20.0147 25.8703 22.1784 25.8703 22.1784C25.8703 22.1784 25.406 24.5695 25.5418 25.3662C25.6773 26.1629 25.9208 26.9013 26.8056 27.2479C27.6906 27.5945 28.4412 27.5791 28.4412 27.5791C28.4412 27.5791 30.0181 27.7055 31.2063 27.4187C32.3945 27.1325 33.021 26.2788 33.021 26.2788C33.021 26.2788 33.2996 25.9118 33.5007 25.4732C33.7019 25.0347 33.7608 24.7304 33.7697 24.6929L33.8943 24.1763L31.8742 24.179C31.8742 24.179 31.7629 25.5393 30.6737 25.6649C29.5848 25.7902 29.0004 25.7428 28.7897 25.7347C28.5822 25.727 27.4122 25.7762 27.5071 24.7808C27.5076 24.7674 27.5084 24.7477 27.5097 24.7197C27.564 23.5844 27.6876 23.2902 27.6876 23.2902L34.0288 23.272L34.2993 21.6738C34.6072 19.8557 34.3812 18.4729 32.7569 17.9324Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.8507 17.8536L26.2816 17.8433L26.0099 19.5686L19.7965 25.6223L25.01 25.6117L24.7071 27.4751L17.0287 27.4764L17.3497 25.5548L23.3059 19.7343L18.5543 19.734L18.8507 17.8536Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.3713 17.8433C15.5875 17.8433 14.8471 18.1588 14.2145 18.5123L14.3254 17.8433H12.2483L10.585 27.4256H12.6637L13.5852 22.1169C13.7771 21.0396 14.5627 19.7099 16.1044 19.7099L17.179 19.7055L17.5022 17.8433H16.3713Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.16528 17.2576C9.16333 17.2797 8.98589 18.3527 8.7461 19.6219C8.6543 20.1076 8.29078 20.3683 7.87137 20.4587C7.17896 20.608 6.43379 20.5806 6.43379 20.5806L3.1556 20.572L3.87537 16.1389L6.84579 16.1473C6.84579 16.1473 7.04683 16.143 7.32752 16.1474C7.64653 16.1525 8.06851 16.1688 8.41526 16.2154C8.71224 16.2553 8.95412 16.3175 9.02892 16.4138C9.12757 16.5409 9.16832 16.7032 9.18204 16.8515C9.20151 17.0623 9.16632 17.2448 9.16528 17.2576ZM10.7272 14.9029C10.5643 14.7274 10.3346 14.5921 10.0749 14.4877C9.80568 14.3795 9.50433 14.3045 9.21215 14.2527C8.84 14.1866 8.48275 14.158 8.22586 14.1457C7.98953 14.1344 7.83812 14.1371 7.83812 14.1371L4.58981 14.1366L2.17259 14.1362L0 27.4759L2.02279 27.478L2.82234 22.5333L6.74425 22.5506C6.74425 22.5506 8.27126 22.6118 9.35544 22.0266C10.4395 21.4408 10.7265 20.1092 10.7265 20.1092C10.7265 20.1092 10.8458 19.6152 10.9431 19.0119C11.0501 18.3495 11.1597 17.5541 11.2166 17.1305C11.2416 16.9447 11.2564 16.8304 11.2564 16.8304C11.2564 16.8304 11.2827 16.693 11.2852 16.4801C11.2887 16.1822 11.2454 15.7363 11.0182 15.3115C10.943 15.1709 10.8477 15.0327 10.7272 14.9029Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M65.8755 10.0079L68.4177 11.9736H89.2996C89.2996 11.9736 89.2571 11.2837 88.7008 10.3066C88.3525 9.69422 87.7225 9.04705 87.0613 8.37429C86.8213 8.12984 85.8578 7.36398 85.1393 6.88851C83.2955 5.66924 82.266 5.19774 80.3541 4.30859L65.8755 10.0079Z"
        fill={primary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M54.4667 4.95525L56.8817 0.00535438C56.8817 0.00535438 62.1685 -0.0994707 66.7269 0.618506C71.2856 1.33672 75.4553 2.44308 75.3645 2.4915L63.803 8.66159C63.803 8.66159 61.1028 6.91601 57.7478 5.84503C55.8478 5.27951 54.4667 4.95525 54.4667 4.95525"
        fill={primary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M39.6881 5.51241L39.1865 2.62839C39.1865 2.62839 42.7564 1.65981 46.0275 1.03866C49.2983 0.417514 53.6372 0.124023 53.6372 0.124023L52.2016 4.57902C52.2016 4.57902 48.3857 4.04752 44.8056 4.54364C42.0144 4.88278 39.6881 5.51241 39.6881 5.51241"
        fill={primary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.4229 10.2404L25.5308 8.25355C25.5308 8.25355 28.1484 6.73652 31.6273 5.32078C35.1062 3.90484 36.9615 3.31592 36.9615 3.31592L37.5488 6.13025C37.5488 6.13025 34.1995 7.27305 32.28 8.1985C30.2977 9.06119 28.4229 10.2404 28.4229 10.2404"
        fill={primary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.0199 15.2297H21.2545C21.2545 15.2297 22.6531 14.0765 23.6442 13.337C24.6354 12.5974 26.4396 11.4295 26.4396 11.4295L22.918 9.74805C22.918 9.74805 19.942 11.6289 18.6784 12.5164C17.4498 13.3341 15.0199 15.2297 15.0199 15.2297"
        fill={primary}
      />
    </svg>
  );
};

export function P24Logo({
  logoColor = LOGO_COLOR.BLACK,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const { primary, secondary } = getLogoColors(
    LOGO.P24,
    LOGO_COLORS,
    logoColor
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.P24}
      logoColor={logoColor}
      render={() => {
        return;
      }}
    />
  );
}
