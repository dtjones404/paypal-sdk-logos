/* @flow */
/** @jsx node */

import { node, type ComponentNode } from "@krakenjs/jsx-pragmatic/src";

import { getLogoCDNUrl, getSVGs, SVGLogo, type SVGLogoProps } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
import type { LogoColorMap, LogoColorSVGMap } from "../../types";

const LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#2D59A1",
    secondary: "#1F3364",
    tertiary: "#FFFFFF",
    quaternary: "#CACCC8",
    quinary: "#FFFFFF",
    senary: "#FFFFFF",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#000000",
    secondary: "#000000",
    tertiary: "#FFFFFF",
    quaternary: "#FFFFFF",
    quinary: "#FFFFFF",
    senary: "#FFFFFF",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#2D59A1",
    secondary: "#1F3364",
    tertiary: "#FFFFFF",
    quaternary: "#CACCC8",
    quinary: "#1B4482",
    senary: "#4E4E4E",
  },
};

const getSVG = ({
  primary,
  secondary,
  tertiary,
  quaternary,
  quinary,
  senary,
}) => {
  return (
    <svg
      width="90"
      height="34"
      viewBox="0 0 90 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M67.3244 32.0364C67.3244 31.7959 67.4079 31.6213 67.5792 31.5027C67.7625 31.3755 67.9818 31.3138 68.2493 31.3138H69.4735C69.8436 31.3138 70.1025 31.3723 70.2431 31.4881C70.3811 31.6014 70.4481 31.7679 70.4481 31.9961V32.1815C70.4481 32.421 70.3627 32.5955 70.1868 32.7141C69.9994 32.8403 69.7259 32.9043 69.3738 32.9043H68.2992C67.9736 32.9043 67.7231 32.8496 67.5548 32.7411C67.3995 32.6408 67.3244 32.4764 67.3244 32.2379V32.0364ZM69.9902 28.5709C69.9902 29.1522 69.6647 29.4227 68.9655 29.4227H68.4575C67.8549 29.4227 67.5743 29.1318 67.5743 28.5064C67.5743 28.1848 67.6575 27.9529 67.8213 27.8169C67.9899 27.6771 68.2434 27.6063 68.5741 27.6063H69.0487C69.6909 27.6063 69.9902 27.9128 69.9902 28.5709V28.5709ZM71.1635 26.9888H68.6654C67.1723 26.9888 66.8589 27.8053 66.8589 28.4903C66.8589 28.783 66.927 29.0529 67.0612 29.293C67.155 29.4599 67.2924 29.5995 67.4713 29.7108C67.0286 29.8919 66.9253 30.2173 66.9253 30.4809C66.9253 30.6447 66.9709 30.791 67.0601 30.9161C67.1043 30.9779 67.1582 31.0333 67.2211 31.0816C67.0701 31.1665 66.9411 31.2738 66.8362 31.4015C66.68 31.5916 66.6006 31.8271 66.6006 32.1009V32.3104C66.6006 32.699 66.7519 33.0005 67.0498 33.207C67.3355 33.4052 67.7223 33.5057 68.1994 33.5057H69.415C69.9658 33.5057 70.3979 33.3891 70.6988 33.1591C71.0071 32.9232 71.1635 32.5864 71.1635 32.1573V31.9639C71.1635 31.546 71.0241 31.2254 70.7498 31.0113C70.4814 30.8021 70.0718 30.696 69.5318 30.696H67.9828C67.8769 30.696 67.789 30.6719 67.7139 30.6225C67.6757 30.5968 67.6242 30.5484 67.6242 30.4248C67.6242 30.2435 67.7074 30.1782 67.77 30.1447C67.8904 30.0808 68.0796 30.0483 68.3328 30.0483H69.0154C69.6018 30.0483 70.0358 29.9072 70.305 29.6284C70.5709 29.3539 70.7056 29.0144 70.7056 28.6195C70.7056 28.3581 70.6687 28.1392 70.5961 27.9692C70.521 27.7939 70.4337 27.6657 70.3291 27.5773C70.3196 27.569 70.3098 27.5607 70.2998 27.5527L71.1635 27.502V26.9888Z"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M64.1566 26.9243C63.8473 26.9243 63.5345 26.9802 63.2265 27.0898C62.9866 27.1752 62.76 27.2802 62.5507 27.4028L62.4455 26.9968H61.8502V31.5392H62.5992V27.9985C62.8565 27.865 63.088 27.765 63.2881 27.7003C63.4979 27.6328 63.7451 27.5985 64.0235 27.5985C64.297 27.5985 64.5079 27.6809 64.6692 27.8509C64.8346 28.0249 64.9148 28.242 64.9148 28.5145V31.5392H65.6636V28.4662C65.6636 28.0418 65.5345 27.6766 65.2805 27.3814C65.0192 27.0782 64.6408 26.9243 64.1566 26.9243"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60.4152 25.377H60.0904C59.934 25.377 59.8326 25.4729 59.8326 25.6212V26.1935C59.8326 26.2808 59.8706 26.3363 59.9026 26.3672C59.9357 26.3997 59.9948 26.4378 60.0904 26.4378H60.4152C60.5263 26.4378 60.6565 26.3738 60.6565 26.1935V25.6212C60.6565 25.4409 60.5263 25.377 60.4152 25.377"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M59.8741 31.5395H60.6232V26.9971H59.8741V31.5395Z"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M58.9994 26.9964H58.0154L56.3648 28.672V25.1431H55.616V31.5391H56.3648V29.5961L58.1111 31.5391H59.0921L56.9121 29.1218L58.9994 26.9964Z"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M53.0323 26.9243C52.7233 26.9243 52.4105 26.9802 52.1022 27.0898C51.8626 27.1749 51.6363 27.2799 51.4267 27.4028L51.3215 26.9968H50.726V31.5392H51.475V27.9985C51.7328 27.8647 51.9645 27.7647 52.1643 27.7003C52.3736 27.6328 52.6208 27.5985 52.8992 27.5985C53.1728 27.5985 53.3839 27.6809 53.5452 27.8509C53.7106 28.0249 53.7908 28.242 53.7908 28.5145V31.5392H54.5396V28.4662C54.5396 28.0418 54.4105 27.6771 54.1565 27.3814C53.8952 27.0782 53.5168 26.9243 53.0323 26.9243"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M47.7645 30.8819C47.2415 31.0131 46.9244 31.0041 46.6663 30.8119C46.5318 30.7122 46.4668 30.549 46.4668 30.3117V30.1105C46.4668 29.8939 46.5308 29.7269 46.6628 29.5992C46.7924 29.4736 47.0054 29.4051 47.2966 29.3955L48.7076 29.3444V30.589L48.4105 30.6918C48.2226 30.757 48.0055 30.821 47.7645 30.8819M47.7994 26.9243C47.2958 26.9243 46.7655 26.9601 46.2236 27.0303L46.1092 27.0455V27.5582H47.6327C48.0505 27.5582 48.3375 27.625 48.4861 27.7574C48.633 27.8882 48.7076 28.0944 48.7076 28.3694V28.8424H47.2166C46.7452 28.8424 46.3743 28.9568 46.1141 29.1819C45.8511 29.4091 45.7178 29.7189 45.7178 30.1022V30.3926C45.7178 30.7583 45.8362 31.0522 46.0696 31.266C46.3028 31.4796 46.6075 31.5879 46.9751 31.5879C47.2253 31.5879 47.4961 31.5466 47.7802 31.4652C48.0561 31.3864 48.3083 31.299 48.5289 31.206C48.6287 31.164 48.7032 31.1312 48.7599 31.1058L48.8464 31.5392H49.456V28.3455C49.456 27.8715 49.3186 27.5116 49.0475 27.2762C48.7789 27.0427 48.3589 26.9243 47.7994 26.9243"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M41.5231 28.0526V26.0428H43.0558C43.6923 26.0428 43.9889 26.3468 43.9889 26.9991C43.9889 27.3233 43.9038 27.5844 43.7357 27.7756C43.5719 27.9622 43.3659 28.0526 43.1057 28.0526H41.5231ZM41.5231 28.6782H43.1225C43.4397 28.6782 43.6942 28.7674 43.901 28.9502C44.106 29.1318 44.2055 29.3769 44.2055 29.6992C44.2055 30.1513 44.1138 30.4631 43.9333 30.626C43.7519 30.79 43.479 30.8731 43.1225 30.8731H41.5231V28.6782ZM44.0613 28.3302C44.2076 28.2392 44.3372 28.1148 44.4489 27.9579C44.6292 27.7048 44.7208 27.385 44.7208 27.0074C44.7208 25.9406 44.148 25.377 43.0642 25.377H40.7744V31.5393H43.1309C43.7129 31.5393 44.1634 31.4048 44.4703 31.1396C44.7802 30.8721 44.9374 30.412 44.9374 29.7718C44.9374 29.3126 44.8124 28.951 44.5657 28.6979C44.4099 28.5377 44.2413 28.4145 44.0613 28.3302V28.3302Z"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M63.5983 20.6668C63.5983 20.8794 63.5503 21.0235 63.4557 21.095C63.353 21.1731 63.1738 21.2123 62.9233 21.2123H61.2998C61.3066 20.8303 61.3448 20.5321 61.4137 20.3246C61.4844 20.1123 61.5974 19.9684 61.7596 19.8843C61.9309 19.7954 62.1879 19.7506 62.5237 19.7506C62.8108 19.7506 63.0358 19.7791 63.1917 19.835C63.3327 19.8856 63.4316 19.9697 63.4948 20.0921C63.5636 20.2246 63.5983 20.4183 63.5983 20.6668M64.0879 23.6908L64.2053 23.6782V23.1627H62.607C62.2429 23.1627 61.9661 23.1153 61.7845 23.0214C61.6107 22.9315 61.4936 22.7912 61.4259 22.5922C61.3605 22.3991 61.3218 22.1296 61.3104 21.7898H62.9569C63.3806 21.7898 63.713 21.7004 63.9442 21.5239C64.1839 21.342 64.3053 21.0534 64.3053 20.6668C64.3053 20.2943 64.2413 19.9926 64.115 19.771C63.9835 19.5411 63.781 19.3753 63.5127 19.2784C63.2592 19.1875 62.9266 19.1411 62.5237 19.1411C62.0434 19.1411 61.6568 19.2111 61.3749 19.3489C61.0813 19.4927 60.868 19.7395 60.7411 20.0828C60.6202 20.4084 60.5587 20.8681 60.5587 21.4486C60.5587 22.0238 60.6169 22.4812 60.7319 22.8086C60.8528 23.1544 61.0596 23.4067 61.3459 23.5586C61.6232 23.7057 62.0111 23.7802 62.4985 23.7802C63.0011 23.7802 63.5357 23.75 64.0879 23.6908"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M58.287 19.1167C57.9777 19.1167 57.6649 19.1726 57.3569 19.2822C57.117 19.3675 56.8907 19.4726 56.6814 19.595L56.5762 19.1892H55.9807V23.7319H56.7297V20.1908C56.9888 20.0569 57.22 19.9569 57.4185 19.8929C57.6286 19.8252 57.8761 19.7909 58.1539 19.7909C58.4275 19.7909 58.6384 19.8733 58.7997 20.0433C58.965 20.2178 59.0455 20.4349 59.0455 20.7069V23.7319H59.7943V20.6588C59.7943 20.2344 59.6652 19.8695 59.411 19.5741C59.1494 19.2706 58.7712 19.1167 58.287 19.1167"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M54.3171 17.5693H53.9923C53.8356 17.5693 53.7343 17.6653 53.7343 17.8139V18.3858C53.7343 18.4727 53.7719 18.5281 53.8037 18.5594L53.8047 18.5604C53.8378 18.5924 53.8974 18.6304 53.9923 18.6304H54.3171C54.4282 18.6304 54.5583 18.5662 54.5583 18.3858V17.8139C54.5583 17.6336 54.4282 17.5693 54.3171 17.5693"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M53.7758 23.7316H54.5248V19.189H53.7758V23.7316Z"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M51.7416 23.7317H52.4906V17.3354H51.7416V23.7317Z"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M49.0257 19.1167C48.7164 19.1167 48.4035 19.1726 48.0956 19.2822C47.8557 19.3675 47.6293 19.4726 47.4201 19.595L47.3149 19.1892H46.7193V23.7319H47.4683V20.1908C47.7275 20.0566 47.959 19.9566 48.1574 19.8929C48.3675 19.8252 48.615 19.7909 48.8926 19.7909C49.1664 19.7909 49.3773 19.8733 49.5386 20.0433C49.7039 20.2178 49.7844 20.4349 49.7844 20.7069V23.7319H50.5332V20.6588C50.5332 20.2344 50.4041 19.8695 50.1496 19.5741C49.888 19.2706 49.5096 19.1167 49.0257 19.1167"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M44.7718 20.683C44.7718 21.3972 44.7122 21.937 44.5945 22.286C44.4839 22.615 44.3164 22.8361 44.0971 22.9434C43.8656 23.0567 43.5208 23.1141 43.0724 23.1141C42.6075 23.1141 42.2543 23.0567 42.0225 22.9434C41.804 22.8363 41.6411 22.6175 41.5383 22.2926C41.4285 21.9458 41.373 21.404 41.373 20.683C41.373 19.9473 41.438 19.391 41.5663 19.0293C41.6877 18.6866 41.8604 18.4596 42.0797 18.3549C42.312 18.2433 42.646 18.1871 43.0724 18.1871C43.5208 18.1871 43.8659 18.2433 44.0985 18.3549C44.3167 18.4591 44.4837 18.6825 44.5943 19.0188C44.7119 19.3764 44.7718 19.9363 44.7718 20.683M44.469 17.7643C44.1267 17.6031 43.6569 17.521 43.0724 17.521C42.5048 17.521 42.0417 17.6031 41.6969 17.764C41.3394 17.9313 41.0669 18.2526 40.8864 18.7191C40.7126 19.1679 40.6245 19.8287 40.6245 20.683C40.6245 21.537 40.7113 22.1923 40.8823 22.6311C41.0604 23.0879 41.3299 23.3985 41.6828 23.5546C42.0211 23.7042 42.4885 23.7803 43.0724 23.7803C43.656 23.7803 44.1234 23.7042 44.462 23.5546C44.8152 23.3982 45.0844 23.0877 45.2625 22.6311C45.4335 22.1923 45.5203 21.537 45.5203 20.683C45.5203 19.8244 45.4352 19.1626 45.2671 18.7158C45.0923 18.2519 44.8239 17.9315 44.469 17.7643"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M66.8693 12.8915V15.9243H67.6181V12.8513C67.6181 12.4158 67.4871 12.0476 67.2293 11.7572C66.9653 11.4598 66.589 11.3092 66.1108 11.3092C65.8018 11.3092 65.4876 11.3648 65.1769 11.4744C64.9547 11.553 64.7456 11.6479 64.5534 11.7577V9.52832H63.8044V15.9243H64.5534V12.3831C64.8126 12.2493 65.0441 12.1493 65.2423 12.0854C65.4524 12.0174 65.7001 11.9834 65.9777 11.9834C66.2513 11.9834 66.4624 12.0657 66.6234 12.2355C66.7888 12.4103 66.8693 12.6248 66.8693 12.8915"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M59.8113 13.7324C60.061 13.9034 60.421 13.99 60.8813 13.99H61.4809C61.7477 13.99 61.9458 14.0389 62.0705 14.1351C62.1895 14.2268 62.2473 14.3605 62.2473 14.5438V14.7534C62.2473 15.001 62.1838 15.1621 62.0581 15.2316C61.9103 15.3135 61.6742 15.3551 61.3557 15.3551H59.4491V15.8638L59.5584 15.8822C59.6929 15.9046 59.9528 15.925 60.354 15.9444C60.7457 15.963 61.0602 15.9728 61.2893 15.9728C61.8016 15.9728 62.205 15.8877 62.4888 15.72C62.7922 15.5409 62.9461 15.2238 62.9461 14.7773V14.5035C62.9461 14.1346 62.8171 13.8442 62.5626 13.6404C62.314 13.4415 61.9724 13.3402 61.5473 13.3402H60.9396C60.6433 13.3402 60.4242 13.3017 60.2879 13.2249C60.1729 13.1607 60.1149 13.0189 60.1149 12.803V12.6174C60.1149 12.3751 60.1792 12.2079 60.3066 12.1205C60.4462 12.0241 60.6734 11.9752 60.981 11.9752H62.7794V11.4569L62.6677 11.44C62.4866 11.4128 62.2275 11.3891 61.897 11.37C61.5679 11.3514 61.2825 11.3418 61.048 11.3418C60.4945 11.3418 60.0949 11.442 59.8265 11.648C59.5543 11.8573 59.4161 12.1835 59.4161 12.6174V12.835C59.4161 13.2511 59.5492 13.5531 59.8113 13.7324"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M57.7623 10.8233H58.0871C58.1982 10.8233 58.3283 10.759 58.3283 10.5787V10.0068C58.3283 9.82643 58.1982 9.76221 58.0871 9.76221H57.7623C57.6059 9.76221 57.5045 9.85816 57.5045 10.0068V10.5787C57.5045 10.6661 57.5425 10.7218 57.5747 10.7527C57.6078 10.785 57.6669 10.8233 57.7623 10.8233"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M57.5461 15.9245H58.2951V11.3818H57.5461V15.9245Z"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M55.663 15.9248H56.4118V12.8517C56.4118 12.427 56.2827 12.0621 56.029 11.7669C55.7671 11.4635 55.389 11.3096 54.9045 11.3096C54.5955 11.3096 54.2827 11.3652 53.9744 11.475C53.7348 11.5604 53.5082 11.6654 53.2989 11.7881L53.194 11.3821H52.5981V15.9248H53.3472V12.3835C53.6063 12.2495 53.8381 12.1495 54.0365 12.0858C54.2463 12.0178 54.4938 11.9838 54.7714 11.9838C55.045 11.9838 55.2561 12.0661 55.4174 12.2361C55.5828 12.4104 55.663 12.6275 55.663 12.8998V15.9248Z"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M51.4639 15.9248V12.8517C51.4639 12.427 51.3348 12.0621 51.0808 11.7669C50.8189 11.4635 50.4408 11.3096 49.9564 11.3096C49.6479 11.3096 49.3348 11.3652 49.0265 11.475C48.7866 11.5604 48.56 11.6654 48.351 11.7881L48.2458 11.3821H47.6505V15.9248H48.399V12.3835C48.6581 12.2495 48.8899 12.1495 49.0881 12.0858C49.2987 12.0178 49.5462 11.9838 49.8233 11.9838C50.0968 11.9838 50.3082 12.0661 50.4695 12.2361C50.6349 12.4104 50.7151 12.6275 50.7151 12.8998V15.9248H51.4639Z"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45.7708 10.7525C45.8038 10.7847 45.8632 10.8228 45.9581 10.8228H46.2831C46.3943 10.8228 46.5241 10.7585 46.5241 10.5785V10.0063C46.5241 9.82594 46.3943 9.76172 46.2831 9.76172H45.9581C45.8017 9.76172 45.7006 9.85767 45.7006 10.0063V10.5785C45.7006 10.6656 45.7385 10.7213 45.7705 10.7523L45.7708 10.7525Z"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45.7422 15.9245H46.491V11.3818H45.7422V15.9245Z"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M41.5231 13.3196L44.3627 13.2793V12.6897L41.5231 12.6494V11.0786C41.5231 10.8598 41.5778 10.6961 41.6857 10.5918C41.7942 10.487 41.9452 10.4364 42.1479 10.4364H44.7127V9.83273L44.5863 9.82693C43.669 9.78412 42.8094 9.76221 42.0314 9.76221C41.6828 9.76221 41.384 9.8637 41.1436 10.0637C40.8985 10.2674 40.7744 10.5898 40.7744 11.022V15.9248H41.5231V13.3196Z"
        fill={quinary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M89.656 0.233887H89.3312C89.1748 0.233887 89.0734 0.329842 89.0734 0.478435V1.05039C89.0734 1.13778 89.1114 1.19319 89.1434 1.22417C89.1764 1.25641 89.2358 1.29494 89.3312 1.29494H89.656C89.7671 1.29494 89.8973 1.23072 89.8973 1.05039V0.478435C89.8973 0.298109 89.7671 0.233887 89.656 0.233887V0.233887Z"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M89.731 1.85352H89.2479C89.1744 1.85352 89.1151 1.90892 89.1151 1.97692V6.27276C89.1151 6.34076 89.1744 6.39617 89.2479 6.39617H89.731C89.8044 6.39617 89.8638 6.34076 89.8638 6.27276V1.97692C89.8638 1.90892 89.8044 1.85352 89.731 1.85352"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M86.3427 3.97901L88.2273 2.06015C88.2628 2.02388 88.2717 1.97175 88.2506 1.92717C88.2294 1.88259 88.1817 1.85363 88.1291 1.85363H87.5046C87.4671 1.85363 87.4319 1.86799 87.4067 1.89367L85.7954 3.5292V0.123407C85.7954 0.0554074 85.736 0 85.6625 0H85.1795C85.106 0 85.0466 0.0554074 85.0466 0.123407V6.27262C85.0466 6.34087 85.106 6.39628 85.1795 6.39628H85.6625C85.736 6.39628 85.7954 6.34087 85.7954 6.27262V4.45324L87.5018 6.35196C87.5271 6.37991 87.5645 6.39628 87.6038 6.39628H88.2381C88.2899 6.39628 88.3365 6.36833 88.3587 6.32476C88.3804 6.28169 88.3731 6.23006 88.34 6.19354L86.3427 3.97901Z"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M82.1281 3.97901L84.0127 2.06015C84.0482 2.02388 84.0572 1.97175 84.036 1.92717C84.0149 1.88259 83.9672 1.85363 83.9146 1.85363H83.29C83.2526 1.85363 83.2173 1.86799 83.1921 1.89367L81.5811 3.52895V0.123407C81.5811 0.0554074 81.5217 0 81.4482 0H80.9652C80.8917 0 80.8323 0.0554074 80.8323 0.123407V6.27262C80.8323 6.34087 80.8917 6.39628 80.9652 6.39628H81.4482C81.5217 6.39628 81.5811 6.34087 81.5811 6.27262V4.45375L83.2873 6.35196C83.3125 6.37991 83.3499 6.39628 83.3892 6.39628H84.0235C84.0753 6.39628 84.1219 6.36833 84.1442 6.32476C84.1659 6.28169 84.1585 6.23006 84.1255 6.19354L82.1281 3.97901Z"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M78.1366 1.78076C77.8275 1.78076 77.5147 1.83667 77.2062 1.94623C76.9668 2.03161 76.7402 2.13663 76.5309 2.25928L76.4504 1.94799C76.4363 1.89233 76.3826 1.8533 76.3214 1.8533H75.9633C75.8901 1.8533 75.8304 1.9087 75.8304 1.9767V6.27254C75.8304 6.34054 75.8901 6.39595 75.9633 6.39595H76.4463C76.5195 6.39595 76.5792 6.34054 76.5792 6.27254V2.85491C76.8381 2.72092 77.0696 2.62094 77.2683 2.55672C77.4786 2.48922 77.7259 2.45497 78.0035 2.45497C78.277 2.45497 78.4882 2.53732 78.6495 2.70732C78.8148 2.88161 78.8951 3.0987 78.8951 3.37095V6.27254C78.8951 6.34054 78.9547 6.39595 79.0279 6.39595H79.5107C79.5841 6.39595 79.6438 6.34054 79.6438 6.27254V3.3226C79.6438 2.89823 79.5148 2.53304 79.2607 2.23787C78.9994 1.93464 78.621 1.78076 78.1366 1.78076"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M73.0717 5.73836C72.5539 5.86958 72.233 5.86101 71.9735 5.66835C71.8391 5.56836 71.7738 5.40491 71.7738 5.16817V4.96694C71.7738 4.75085 71.8377 4.58362 71.97 4.45593C72.0999 4.33001 72.3129 4.2615 72.6038 4.25193L74.0148 4.20081V5.44546L73.7182 5.54847C73.5274 5.61445 73.31 5.67817 73.0717 5.73836M73.1067 1.78076C72.6049 1.78076 72.0747 1.81652 71.5309 1.88679C71.4653 1.89535 71.4165 1.94749 71.4165 2.00894V2.29101C71.4165 2.35927 71.4758 2.41467 71.5493 2.41467H72.94C73.3577 2.41467 73.6445 2.48141 73.7933 2.61389C73.9403 2.7446 74.0148 2.95087 74.0148 3.22589V3.69887H72.5238C72.0527 3.69887 71.6819 3.81295 71.4213 4.03836C71.1584 4.26578 71.025 4.57556 71.025 4.95863V5.24901C71.025 5.61521 71.1438 5.90937 71.3772 6.12269C71.61 6.33601 71.9145 6.4443 72.2823 6.4443C72.5336 6.4443 72.8044 6.403 73.0874 6.32165C73.3634 6.24282 73.6155 6.15543 73.8359 6.0625C73.9357 6.02044 74.0105 5.98795 74.0671 5.96226L74.1335 6.29521C74.1452 6.35338 74.2 6.39595 74.2639 6.39595H74.6304C74.7039 6.39595 74.7633 6.34079 74.7633 6.27254V3.20196C74.7633 2.72798 74.6258 2.36808 74.3548 2.13285C74.0861 1.89938 73.6659 1.78076 73.1067 1.78076"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M69.6214 4.11264C69.6214 5.24975 69.2647 5.80232 68.5301 5.80232C68.1259 5.80232 67.6973 5.68697 67.2557 5.45929V2.79369C67.4764 2.68943 67.6835 2.60405 67.8719 2.54008C68.07 2.47258 68.2915 2.43884 68.5301 2.43884C68.8372 2.43884 69.0882 2.56829 69.2972 2.83525C69.5125 3.11052 69.6214 3.54069 69.6214 4.11264M68.6382 1.80518C68.3726 1.80518 68.0828 1.86235 67.7773 1.97518C67.559 2.05552 67.3693 2.14039 67.2107 2.22804L67.1443 1.94999C67.131 1.89332 67.0768 1.85328 67.0147 1.85328H66.6398C66.5663 1.85328 66.507 1.90869 66.507 1.97694V8.18257C66.507 8.25082 66.5663 8.30598 66.6398 8.30598H67.1229C67.1963 8.30598 67.2557 8.25082 67.2557 8.18257V6.09069C67.4387 6.18085 67.6314 6.25691 67.8312 6.3171C68.1096 6.40147 68.3812 6.44429 68.6382 6.44429C69.7873 6.44429 70.3705 5.65977 70.3705 4.11264C70.3705 3.47596 70.2341 2.93221 69.9652 2.49601C69.683 2.03764 69.2365 1.80518 68.6382 1.80518"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M63.6859 5.80232C63.3685 5.80232 63.1185 5.76303 62.9434 5.68546C62.7824 5.61444 62.6553 5.46383 62.5655 5.23842C62.4688 4.99538 62.4197 4.61937 62.4197 4.12045C62.4197 3.62203 62.4688 3.24451 62.5655 2.99845C62.655 2.77153 62.7819 2.62118 62.9421 2.55242C63.1183 2.47686 63.3685 2.43884 63.6859 2.43884C63.9979 2.43884 64.2471 2.47686 64.426 2.55242C64.5895 2.62168 64.7188 2.77229 64.8104 2.99971C64.9101 3.24501 64.9603 3.62203 64.9603 4.12045C64.9603 4.61912 64.9101 4.99488 64.8107 5.23741C64.7188 5.46307 64.5886 5.61393 64.4252 5.68521C64.2468 5.76303 63.9982 5.80232 63.6859 5.80232M64.8128 1.99406C64.5268 1.86889 64.1476 1.80518 63.6859 1.80518C63.2237 1.80518 62.8464 1.86738 62.5639 1.98978C62.2676 2.11848 62.0404 2.35875 61.8889 2.70404C61.7444 3.03446 61.671 3.51097 61.671 4.12045C61.671 4.71935 61.7444 5.19183 61.8889 5.52478C62.0402 5.87258 62.2682 6.11688 62.5664 6.25061C62.8532 6.37906 63.2294 6.44429 63.6859 6.44429C64.1479 6.44429 64.5274 6.37906 64.8139 6.25061C65.1126 6.11663 65.3404 5.87384 65.4911 5.52906C65.6356 5.19863 65.7093 4.72464 65.7093 4.12045C65.7093 3.51701 65.6356 3.04303 65.4911 2.71184C65.3401 2.36706 65.1121 2.12553 64.8128 1.99406"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M59.3007 3.97901L61.1852 2.06015C61.2208 2.02388 61.2297 1.97175 61.2086 1.92717C61.1874 1.88259 61.1397 1.85363 61.0871 1.85363H60.4628C60.4254 1.85363 60.3902 1.86799 60.3649 1.89367L58.7536 3.5292V0.123407C58.7536 0.0554074 58.6943 0 58.6208 0H58.1377C58.0643 0 58.0049 0.0554074 58.0049 0.123407V6.27262C58.0049 6.34087 58.0643 6.39628 58.1377 6.39628H58.6208C58.6943 6.39628 58.7536 6.34087 58.7536 6.27262V4.45324L60.4598 6.35196C60.485 6.37991 60.5224 6.39628 60.5618 6.39628H61.1964C61.2481 6.39628 61.2948 6.36833 61.3167 6.32476C61.3387 6.28169 61.3314 6.23006 61.2983 6.19354L59.3007 3.97901Z"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M55.0861 3.97901L56.971 2.06015C57.0065 2.02388 57.0154 1.97175 56.9943 1.92717C56.9731 1.88259 56.9254 1.85363 56.8728 1.85363H56.2483C56.2109 1.85363 56.1756 1.86799 56.1504 1.89367L54.5391 3.5292V0.123407C54.5391 0.0554074 54.4797 0 54.4062 0H53.9232C53.8497 0 53.7903 0.0554074 53.7903 0.123407V6.27262C53.7903 6.34087 53.8497 6.39628 53.9232 6.39628H54.4062C54.4797 6.39628 54.5391 6.34087 54.5391 6.27262V4.45324L56.2456 6.35196C56.2708 6.37991 56.3082 6.39628 56.3475 6.39628H56.9818C57.0336 6.39628 57.0802 6.36833 57.1022 6.32476C57.1241 6.28169 57.1168 6.23006 57.0837 6.19354L55.0861 3.97901Z"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M53.0022 1.85857C52.8742 1.82306 52.7159 1.80518 52.5316 1.80518C52.1916 1.80518 51.8782 1.88451 51.6004 2.04066C51.4014 2.15273 51.2076 2.29805 51.0222 2.4746L50.9389 1.95855C50.9292 1.89811 50.8731 1.85328 50.8075 1.85328H50.4494C50.3759 1.85328 50.3165 1.90869 50.3165 1.97694V6.27252C50.3165 6.34078 50.3759 6.39618 50.4494 6.39618H50.9324C51.0059 6.39618 51.0653 6.34078 51.0653 6.27252V3.16518C51.3174 2.94078 51.5481 2.77682 51.7514 2.6786C51.959 2.57811 52.2073 2.52749 52.4895 2.52749C52.6096 2.52749 52.7612 2.5431 52.9401 2.57383C52.9786 2.58063 53.019 2.57081 53.0493 2.54738C53.0794 2.52396 53.0973 2.48921 53.0973 2.45244V1.97694C53.0973 1.92229 53.0585 1.87418 53.0022 1.85857"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.3781 3.87641C46.3846 3.49384 46.4229 3.19565 46.4917 2.98863C46.5625 2.77657 46.6758 2.63251 46.8376 2.54814C47.0084 2.45949 47.2654 2.41466 47.6015 2.41466C47.8886 2.41466 48.1139 2.44312 48.27 2.49903C48.4107 2.5494 48.5097 2.63352 48.5731 2.75617C48.6414 2.88789 48.6761 3.08156 48.6761 3.33089C48.6761 3.54371 48.6281 3.68752 48.5335 3.75904C48.4308 3.83712 48.2516 3.87641 48.0014 3.87641H46.3781ZM49.0223 4.18795C49.2619 4.00586 49.3836 3.71724 49.3836 3.33089C49.3836 2.95815 49.3197 2.65669 49.1931 2.43506C49.0613 2.20512 48.8588 2.0394 48.5905 1.94244C48.3378 1.85152 48.0052 1.80518 47.6015 1.80518C47.1209 1.80518 46.7343 1.87519 46.4532 2.01295C46.1596 2.15601 45.9463 2.40307 45.8189 2.7471C45.698 3.073 45.6367 3.53263 45.6367 4.11264C45.6367 4.68787 45.695 5.14549 45.8099 5.47264C45.9306 5.81818 46.1371 6.07054 46.4239 6.22241C46.7013 6.36949 47.0889 6.44429 47.5766 6.44429C48.0789 6.44429 48.6138 6.41406 49.166 6.35488C49.2329 6.34783 49.2836 6.29519 49.2836 6.23223V5.95015C49.2836 5.88215 49.224 5.82675 49.1508 5.82675H47.6848C47.321 5.82675 47.0442 5.7794 46.8626 5.68546C46.6891 5.59555 46.5717 5.45526 46.5039 5.25605C46.4383 5.06338 46.3993 4.7939 46.3882 4.45365H48.0347C48.459 4.45365 48.7911 4.36424 49.0223 4.18795V4.18795Z"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45.3971 0.233887H44.8975C44.8406 0.233887 44.7899 0.267887 44.7717 0.318005L42.9321 5.40969L41.0928 0.318005C41.0747 0.267887 41.024 0.233887 40.9668 0.233887H40.4588C40.4159 0.233887 40.3758 0.253027 40.3509 0.285516C40.3259 0.317753 40.3194 0.359309 40.333 0.396835L42.49 6.31258C42.5082 6.3627 42.5589 6.39645 42.6158 6.39645H43.2401C43.297 6.39645 43.3477 6.3627 43.3659 6.31258L45.5229 0.396835C45.5367 0.359309 45.5299 0.317753 45.505 0.285516C45.4801 0.253027 45.4399 0.233887 45.3971 0.233887"
        fill={senary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.31928 0.354492C3.29367 0.354492 0 3.41449 0 7.15449V26.2952C0 30.0352 3.29367 33.0952 7.31928 33.0952H27.922C31.9473 33.0952 35.241 30.0352 35.241 26.2952V7.15449C35.241 3.41449 31.9473 0.354492 27.922 0.354492H7.31928Z"
        fill="url(#paint0_linear_0_4013)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.71563 0.984375C3.84481 0.984375 0.677734 3.92676 0.677734 7.52295V7.52295V25.9273C0.677734 29.5237 3.84481 32.4659 7.71563 32.4659V32.4659H27.5254C31.3962 32.4659 34.5633 29.5237 34.5633 25.9273V25.9273V7.52295C34.5633 3.92676 31.3962 0.984375 27.5254 0.984375V0.984375H7.71563Z"
        fill="url(#paint1_linear_0_4013)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.59038 0.984375V12.2751H0.677734V21.09H7.59038V32.4659H17.0783V21.09H34.5633V12.2751H17.0783V0.984375H7.59038Z"
        fill="url(#paint2_linear_0_4013)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_4013"
          x1="9.7929"
          y1="-10.4155"
          x2="-9.31958"
          y2="25.2163"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={tertiary} />
          <stop offset="1" stop-color={quaternary} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_4013"
          x1="17.6205"
          y1="44.3653"
          x2="45.186"
          y2="14.6948"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={tertiary} />
          <stop offset="1" stop-color={quaternary} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_0_4013"
          x1="14.9774"
          y1="39.3288"
          x2="37.5413"
          y2="15.0419"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={primary} />
          <stop offset="1" stop-color={secondary} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const getVerkkopankkiSVGs = (): LogoColorSVGMap =>
  getSVGs(LOGO.VERKKOPANKKI, getSVG, LOGO_COLORS);

export function VerkkopankkiLogo({
  logoColor = LOGO_COLOR.BLACK,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const svg = getVerkkopankkiSVGs()[logoColor];
  const cdnUrl = getLogoCDNUrl(LOGO.VERKKOPANKKI, logoColor);

  return (
    <SVGLogo
      {...props}
      name={LOGO.VERKKOPANKKI}
      logoColor={logoColor}
      cdnUrl={cdnUrl}
      render={() => {
        return svg;
      }}
    />
  );
}
