/* @flow */
/** @jsx node */

import { node, type ComponentNode } from "@krakenjs/jsx-pragmatic/src";

import { getLogoCDNUrl, getSVGs, SVGLogo, type SVGLogoProps } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
import type { LogoColorMap, LogoColorSVGMap } from "../../types";

const LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#FFFFFF",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#FFFFFF",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#000000",
  },
};

const getSVG = ({ primary }) => {
  return (
    <svg
      width="57"
      height="48"
      viewBox="0 0 57 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.709351 17.7931V35.5862H4.0197V0H0.709351V17.7931ZM51.393 41.9584C50.0334 42.4078 49.4308 43.1883 49.324 44.607C49.2293 45.9902 49.809 47.0071 50.9792 47.5392C51.4997 47.7756 51.7953 47.8227 52.7882 47.8227C53.7696 47.8227 54.0651 47.7756 54.5616 47.5506C55.7909 46.983 56.2638 46.2145 56.2759 44.8199C56.2759 43.4248 55.7559 42.6086 54.5145 42.0531C53.746 41.7105 52.2682 41.6628 51.393 41.9584ZM54.1357 42.9518C54.786 43.3892 55.0109 43.9332 54.9518 44.9973C54.9283 45.6355 54.8451 45.9431 54.6677 46.191C53.746 47.4324 51.5347 47.3262 50.873 45.9902C50.5539 45.387 50.5063 44.4176 50.7663 43.8265C50.9677 43.3536 51.5233 42.8216 51.9726 42.6798C52.5638 42.4904 53.6393 42.6207 54.1357 42.9518ZM46.5813 40.7882V40.197V39.6059H47.7635V40.7882H46.5813ZM7.56649 12.3547V24.7094H10.0493L10.0372 12.3547V0H7.56649V12.3547ZM46.5813 47.7635V44.8079V41.8522H47.7635V47.7635H46.5813ZM13.2414 12.3547V24.7094H15.665V0H13.2414V12.3547ZM43.1883 42.3607C43.3892 42.1598 43.6727 41.9469 43.8029 41.8757C44.1106 41.6984 44.7843 41.6984 45.2928 41.8643C45.5172 41.9469 45.7066 42.0175 45.7302 42.0296C45.7537 42.0416 45.671 42.2425 45.5643 42.4789L45.3634 42.8807L44.6305 42.8336C43.9447 42.7745 43.8741 42.798 43.5309 43.1057C43.0465 43.543 42.9162 44.2167 42.9162 46.2387V47.7635H41.734V41.8522H42.798V42.7269L43.1883 42.3607ZM17.4975 12.3547V24.7094H18.5616V0H17.4975V12.3547ZM36.0591 41.0717C36.0591 40.989 36.272 40.5873 36.6147 40.0432C36.8867 39.6059 36.8988 39.6059 37.6787 39.6059H38.4707L37.7143 40.3744C37.0405 41.0482 36.8988 41.1429 36.5085 41.1429C36.26 41.1429 36.0591 41.1073 36.0591 41.0717ZM21.3869 11.9053C21.3869 18.4669 21.3634 24.0235 21.352 24.26L21.3278 24.7094H24.7094V0H21.399L21.3869 11.9053ZM34.2857 42.3131C34.451 42.1948 34.8768 42.0175 35.2315 41.9234C36.5085 41.5802 38.601 41.781 39.1686 42.3016C39.653 42.7389 39.7241 43.0701 39.7241 45.0087C39.7362 46.2622 39.7832 47.0186 39.8894 47.3142L40.0553 47.7635H39.405C38.8018 47.7635 38.7548 47.74 38.648 47.4209L38.5298 47.0777L37.7969 47.4559C37.1111 47.7991 36.9814 47.8227 35.8227 47.8227C34.7351 47.8227 34.5222 47.7871 34.0963 47.5506C32.8905 46.8533 32.9496 45.4225 34.2145 44.8079C34.6169 44.6185 37.584 44.1106 38.341 44.0985C38.3881 44.0985 38.4236 43.9212 38.4236 43.6968C38.4236 42.9518 37.7854 42.5616 36.5676 42.5616C35.7515 42.5616 35.1603 42.8101 34.9004 43.2709C34.7116 43.6021 34.6639 43.6256 34.1204 43.6021C33.8007 43.5786 33.5172 43.5074 33.4937 43.4362C33.4346 43.2709 33.919 42.5736 34.2857 42.3131ZM36.3547 47.1012C37.6787 46.9595 38.4236 46.3092 38.4236 45.3043C38.4236 45.0323 38.3881 44.8079 38.341 44.8199C38.2819 44.8199 38.1045 44.867 37.9151 44.9261C37.7378 44.9852 37.0996 45.0914 36.4964 45.1626C35.2671 45.3278 34.8057 45.5172 34.6169 45.9431C34.4986 46.1795 34.5222 46.2857 34.723 46.5578C35.0421 46.983 35.6333 47.1845 36.3547 47.1012ZM27.9015 12.3547V24.7094H30.3842V0H27.9015V12.3547ZM26.861 42.6086C27.2156 42.2781 27.7832 41.994 28.3388 41.8643C29.9825 41.474 31.6968 42.0175 32.2047 43.0936C32.3229 43.3301 32.3941 43.543 32.3706 43.5665C32.3585 43.5786 32.0865 43.6256 31.7909 43.6727C31.2589 43.7559 31.2353 43.7438 30.9874 43.3301C30.3131 42.1713 28.2206 42.3487 27.5703 43.6256C27.2156 44.3229 27.2392 45.6711 27.618 46.1796C28.0667 46.7942 28.4455 46.983 29.2967 47.0307C29.9704 47.0662 30.1478 47.0307 30.5025 46.7942C30.7268 46.6404 31.0109 46.3092 31.1406 46.0613C31.2504 45.8422 31.3066 45.7299 31.3971 45.6805C31.4922 45.6287 31.6251 45.6464 31.8976 45.6825C32.1932 45.7181 32.4653 45.7893 32.5002 45.8249C32.5358 45.8599 32.4411 46.1204 32.2759 46.416C31.1292 48.6032 26.9557 48.2956 26.1751 45.9666C25.7969 44.8314 26.116 43.283 26.861 42.6086ZM32.7488 12.3547V24.7094H33.8128V0H32.7488V12.3547ZM19.8856 42.3131C20.075 42.1713 20.4653 41.994 20.7252 41.8993C21.8249 41.5566 23.3262 41.8052 23.9174 42.4198C24.3547 42.8692 24.4729 43.6256 24.4729 45.884V47.7635H23.1724V45.7658C23.1724 43.5309 23.0898 43.1171 22.5342 42.8336C22.0728 42.5851 20.9852 42.5736 20.5123 42.8216C19.7082 43.2353 19.6847 43.318 19.6491 45.6475L19.6135 47.7635H18.3251V41.8402L18.8927 41.8757C19.4012 41.9113 19.4483 41.9349 19.4839 42.2425L19.5194 42.5616L19.8856 42.3131ZM36.8867 12.3547V24.7094H38.069V0H36.8867V12.3547ZM10.2266 43.0465C10.4751 42.5495 11.0777 42.1243 11.8347 41.9113C12.2835 41.781 12.8276 41.746 13.6552 41.781C14.9436 41.8402 15.4997 42.006 15.9606 42.5025C16.2441 42.8101 16.2561 42.8807 16.3153 44.9617C16.3623 46.3328 16.4335 47.208 16.5282 47.3733L16.5317 47.3803C16.6011 47.5197 16.6699 47.658 16.6699 47.6924C16.6699 47.728 16.3744 47.7635 16.0076 47.7635C15.405 47.7635 15.3459 47.74 15.2392 47.4324L15.1209 47.1012L14.4116 47.4559C13.8446 47.74 13.5014 47.8227 12.7329 47.8582C11.5271 47.9174 10.8648 47.7515 10.3092 47.2315C9.91897 46.8768 9.87191 46.7707 9.87191 46.2501C9.87191 45.5764 10.144 45.1861 10.9004 44.7958C11.2436 44.6185 14.2107 44.1106 14.9321 44.0985C15.0859 44.0985 15.0148 43.33 14.8374 43.0701C14.613 42.751 13.9863 42.5616 13.1467 42.5616C12.3426 42.5616 11.7515 42.8101 11.4915 43.2709C11.3142 43.59 11.2315 43.6256 10.7351 43.6256C10.0728 43.6256 9.97808 43.5194 10.2266 43.0465ZM14.0334 46.8413C14.7427 46.4751 15.0148 46.0728 15.0148 45.387C15.0148 44.867 14.9321 44.7017 14.7548 44.867C14.7192 44.9026 14.116 45.0087 13.4067 45.1155C12.6973 45.2217 11.9409 45.3755 11.728 45.4702C11.0542 45.7416 11.0071 46.4039 11.6333 46.8768C12.0826 47.208 13.3475 47.1845 14.0334 46.8413ZM40.6699 12.3547V24.7094H43.9803V0H40.6699V12.3547ZM0.709351 47.7635V43.6727V39.5824L3.34592 39.6415C4.91845 39.665 6.14777 39.7477 6.41981 39.8303C7.01095 40.0197 7.75589 40.7055 7.92117 41.214C8.16969 41.9584 7.75589 42.8101 6.92831 43.2354C6.67979 43.3656 6.62068 43.4483 6.73891 43.4839C8.34703 43.9568 8.94963 45.3164 8.11057 46.5813C7.48385 47.5392 6.54951 47.7635 3.19211 47.7635H0.709351ZM6.62068 41.8402C6.62068 41.1899 6.24247 40.8117 5.45047 40.67C5.10726 40.5988 4.18498 40.5517 3.4165 40.5517H2.00984V43.0345H3.64149C4.52819 43.0345 5.43841 42.9874 5.66281 42.9163C6.28953 42.7389 6.62068 42.3607 6.62068 41.8402ZM6.91625 45.9902C7.27093 45.3043 6.99889 44.5594 6.28953 44.2403C5.97043 44.1106 5.33225 44.0394 3.93706 44.0038L2.00984 43.9568V46.8413L3.99617 46.7942C6.18336 46.7586 6.57363 46.6404 6.91625 45.9902ZM46.8177 12.3547V24.7094H49.1823V0H46.8177V12.3547ZM41.2611 34.3213C41.2611 32.7132 42.1357 31.6727 43.7794 31.33C44.5002 31.1762 45.8249 31.2945 46.451 31.5786C47.6453 32.0985 48.2364 33.0087 48.2364 34.3448C48.2364 36.2956 46.9951 37.3596 44.7488 37.3596C42.5145 37.3596 41.2611 36.272 41.2611 34.3213ZM46.8177 33.4111C46.6524 32.8905 46.0257 32.3229 45.4346 32.1697C44.5835 31.9332 43.7438 32.122 43.1406 32.7017C42.6919 33.139 42.526 33.6825 42.5851 34.5933C42.6563 35.6924 43.2118 36.3426 44.2288 36.532C45.2217 36.7214 46.0728 36.4017 46.6283 35.6688C46.9239 35.2786 47.0307 34.0372 46.8177 33.4111ZM50.601 17.7931V35.5862H51.665V0H50.601V17.7931ZM38.0098 29.8878L38.5419 29.6158L39.0739 29.3437L39.1451 31.33H40.4335V32.1576H39.1209L39.1565 34.1675L39.1565 34.1691C39.1921 36.4017 39.1923 36.4138 39.9841 36.4138C40.3864 36.4138 40.4335 36.4494 40.5282 36.792C40.6579 37.2884 40.5517 37.3596 39.6885 37.3596C38.9086 37.3596 38.2584 37.1352 38.081 36.792C37.9978 36.6382 37.9507 35.7044 37.9507 34.3569V32.1576H37.4778C37.017 32.1576 37.0049 32.1456 37.0049 31.7318C37.0049 31.318 37.017 31.318 37.4543 31.3536L37.8916 31.3892L37.9507 30.6327L38.0098 29.8878ZM31.6256 31.3656C30.786 31.59 30.3486 31.85 29.8643 32.4176C29.3672 32.9973 29.202 33.4937 29.202 34.4395C29.202 36.2835 30.5025 37.3596 32.7367 37.3596C33.884 37.3596 34.5692 37.1823 35.1845 36.7094C35.5391 36.4373 36.1417 35.6218 36.047 35.5392C36.0235 35.515 35.7165 35.468 35.3733 35.4445C34.7821 35.3853 34.7466 35.3968 34.5222 35.7635C34.2031 36.2835 33.5528 36.5676 32.7488 36.5676C32.0159 36.5676 31.2118 36.2244 30.9162 35.7871C30.6919 35.4445 30.4554 34.7586 30.538 34.6875C30.5736 34.6525 31.8265 34.6283 33.3278 34.6404H36.0591V34.0848C36.0591 33.352 35.6097 32.3941 35.0898 32.0038C34.2387 31.3536 32.7367 31.0815 31.6256 31.3656ZM33.8363 32.3585C34.2736 32.607 34.6048 33.0443 34.7116 33.4817L34.7821 33.8128H30.6207V33.5172C30.6207 33.1155 31.2709 32.4297 31.8621 32.2047C32.4411 32.0038 33.3399 32.0629 33.8363 32.3585ZM26.3645 37.2414V33.1505V29.0717L26.9912 29.1073L27.6059 29.1429L27.6415 33.1861L27.665 37.2414H26.3645ZM20.335 31.3656C18.751 31.7318 17.9825 32.5714 17.8757 34.0613C17.8052 35.1368 18.0651 35.8938 18.7268 36.5085C19.4483 37.1702 20.2047 37.3952 21.5643 37.3361C22.4986 37.3005 22.7586 37.2534 23.3497 36.9458C24.3667 36.4259 24.7564 35.7635 24.8041 34.4631C24.8396 33.659 24.8041 33.4111 24.5911 32.9382C23.9879 31.6612 22.0848 30.9633 20.335 31.3656ZM22.5813 32.4061C23.2786 32.7958 23.5627 33.4702 23.5036 34.5222C23.4559 35.3853 23.2671 35.7635 22.676 36.2129C22.0137 36.7094 20.5835 36.6738 19.9091 36.1538C19.2353 35.6218 18.9398 34.191 19.318 33.3043C19.8029 32.1576 21.3634 31.7318 22.5813 32.4061ZM8.74876 37.2649V33.1505V29.0482L11.3262 29.1193C13.9863 29.1784 14.4827 29.2611 15.133 29.7105C15.7712 30.1357 16.0197 30.5616 16.0197 31.2118C16.0197 31.8856 15.7477 32.335 15.0739 32.7017L14.6366 32.9617L15.0618 33.1034C17.0126 33.7416 17.0481 36.0356 15.133 36.9223C14.648 37.1467 14.341 37.1823 11.6809 37.2178L8.74876 37.2649ZM14.0569 32.2994C14.8965 31.8856 14.8965 30.7624 14.069 30.3607C13.7734 30.219 13.2293 30.1478 12.1182 30.1007C10.8643 30.0538 10.3667 30.007 10.1711 30.2278C10.02 30.3984 10.0493 30.7287 10.0493 31.3421V32.5123H11.8582C13.3361 32.5123 13.7263 32.4767 14.0569 32.2994ZM14.2342 36.1303C15.405 35.6453 15.4286 34.191 14.2819 33.7658C13.9272 33.6355 13.2534 33.5764 12.0235 33.5528C11.0662 33.5293 10.2266 33.5293 10.1675 33.5528C10.0963 33.5764 10.0493 34.1675 10.0493 34.948V36.2956H11.9409C13.2884 36.2956 13.9507 36.2485 14.2342 36.1303Z"
        fill={primary}
      />
    </svg>
  );
};

export const getBoletoSVGs = (): LogoColorSVGMap =>
  getSVGs(LOGO.BOLETO, getSVG, LOGO_COLORS);

export function BoletoLogo({
  logoColor = LOGO_COLOR.BLACK,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const { primary } = getLogoColors(LOGO.BOLETO, LOGO_COLORS, logoColor);

  return (
    <SVGLogo
      {...props}
      name={LOGO.BOLETO}
      logoColor={logoColor}
      render={() => {
        return;
      }}
    />
  );
}
