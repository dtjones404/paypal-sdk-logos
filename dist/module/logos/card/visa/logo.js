import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { node } from "@krakenjs/jsx-pragmatic/src";
import { CARD } from "@paypal/sdk-constants/src";
import { SVGCardLogo } from "../../../lib";
export function VisaLogo(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return node(SVGCardLogo, _extends({}, props, {
    name: CARD.VISA,
    render: function render() {
      return node("svg", {
        width: "40",
        height: "24",
        viewBox: "0 0 40 24",
        preserveAspectRatio: "xMinYMin meet",
        xmlns: "http://www.w3.org/2000/svg"
      }, node("path", {
        d: "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
        fill: "rgb(33, 86, 154)"
      }), node("path", {
        d: "M19.596 7.885l-2.11 9.478H14.93l2.11-9.478h2.554zm10.743 6.12l1.343-3.56.773 3.56H30.34zm2.85 3.358h2.36l-2.063-9.478H31.31c-.492 0-.905.274-1.088.695l-3.832 8.783h2.682l.532-1.415h3.276l.31 1.415zm-6.667-3.094c.01-2.502-3.6-2.64-3.577-3.76.008-.338.345-.7 1.083-.793.365-.045 1.373-.08 2.517.425l.448-2.01c-.615-.214-1.405-.42-2.39-.42-2.523 0-4.3 1.288-4.313 3.133-.016 1.364 1.268 2.125 2.234 2.58.996.464 1.33.762 1.325 1.177-.006.636-.793.918-1.526.928-1.285.02-2.03-.333-2.623-.6l-.462 2.08c.598.262 1.7.49 2.84.502 2.682 0 4.437-1.273 4.445-3.243zM15.948 7.884l-4.138 9.478h-2.7L7.076 9.8c-.123-.466-.23-.637-.606-.834-.615-.32-1.63-.62-2.52-.806l.06-.275h4.345c.554 0 1.052.354 1.178.966l1.076 5.486 2.655-6.45h2.683z",
        fill: "rgb(255, 255, 255)"
      }));
    }
  }));
}