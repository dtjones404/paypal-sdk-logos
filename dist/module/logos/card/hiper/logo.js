import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { node } from "@krakenjs/jsx-pragmatic/src";
import { CARD } from "@paypal/sdk-constants/src";
import { SVGCardLogo } from "../../../lib";
export function HiperLogo(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return node(SVGCardLogo, _extends({}, props, {
    name: CARD.HIPER,
    render: function render() {
      return node("svg", {
        width: "40",
        height: "24",
        viewBox: "0 0 40 24",
        preserveAspectRatio: "xMinYMin meet",
        xmlns: "http://www.w3.org/2000/svg"
      }, node("path", {
        d: "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
        fill: "rgb(243, 97, 24)"
      }), node("path", {
        id: "path16",
        fill: "rgb(255, 255, 255)",
        style: "fill-opacity: 1; fill-rule: nonzero; stroke: none;",
        d: "M 3.206 6.45 L 3.206 16.929 L 5.586 16.929 L 5.586 12.545 L 9.489 12.545 L 9.489 16.929 L 11.853 16.929 L 11.853 6.45 L 9.489 6.45 L 9.489 10.477 L 5.586 10.477 L 5.586 6.45 L 3.206 6.45"
      }), node("path", {
        id: "path18",
        fill: "rgb(255, 255, 255)",
        style: "fill-opacity: 1; fill-rule: nonzero; stroke: none;",
        d: "M 32.319 13.882 C 32.351 13.71 32.397 13.353 32.397 12.949 C 32.397 11.068 31.464 9.155 29.008 9.155 C 26.364 9.155 25.167 11.285 25.167 13.213 C 25.167 15.592 26.644 17.085 29.225 17.085 C 30.251 17.085 31.2 16.929 31.977 16.618 L 31.666 15.017 C 31.029 15.219 30.376 15.328 29.567 15.328 C 28.463 15.328 27.499 14.861 27.422 13.882 Z M 27.406 12.265 C 27.468 11.628 27.873 10.725 28.868 10.725 C 29.956 10.725 30.205 11.689 30.205 12.265 L 27.406 12.265"
      }), node("path", {
        id: "path20",
        fill: "rgb(255, 255, 255)",
        style: "fill-opacity: 1; fill-rule: nonzero; stroke: none;",
        d: "M 33.155 16.929 L 35.519 16.929 L 35.519 13.073 C 35.519 12.887 35.533 12.7 35.565 12.545 C 35.72 11.814 36.31 11.348 37.182 11.348 C 37.446 11.348 37.648 11.378 37.819 11.41 L 37.819 9.186 C 37.648 9.155 37.539 9.155 37.321 9.155 C 36.591 9.155 35.658 9.621 35.269 10.725 L 35.207 10.725 L 35.129 9.326 L 33.092 9.326 C 33.123 9.979 33.155 10.709 33.155 11.829 L 33.155 16.929"
      }), node("path", {
        id: "path22",
        fill: "rgb(254, 234, 1)",
        style: "fill-opacity: 1; fill-rule: evenodd; stroke: none;",
        d: "M 14.256 6.028 C 14.927 6.028 15.472 6.572 15.472 7.243 C 15.472 7.914 14.927 8.458 14.256 8.458 C 13.585 8.458 13.041 7.914 13.041 7.243 C 13.041 6.572 13.585 6.028 14.256 6.028"
      }), node("path", {
        id: "path24",
        fill: "rgb(255, 255, 255)",
        style: "fill-opacity: 1; fill-rule: evenodd; stroke: none;",
        d: "M 19.247 15.159 L 20.433 15.159 C 21.624 15.159 22.163 14.395 22.163 13.6 C 22.163 12.805 22.106 11.006 20.633 11.006 C 18.943 11.006 19.218 13.238 19.224 14.408 C 19.226 14.658 19.24 14.908 19.247 15.159 Z M 13.041 9.315 L 15.472 9.315 L 15.472 13.6 C 15.472 14.395 15.912 15.157 16.887 15.159 C 16.894 13.229 16.886 11.243 16.822 9.315 L 18.852 9.315 C 18.896 9.687 18.936 10.059 18.973 10.432 C 19.932 8.514 22.954 8.937 23.971 10.555 C 25.022 12.228 25.379 17.017 20.433 17.017 L 19.282 17.017 C 19.293 17.988 19.295 18.963 19.295 19.936 L 16.865 19.936 C 16.865 19.001 16.871 18.022 16.878 17.016 C 14.252 17.007 13.041 15.339 13.041 13.6 L 13.041 9.315"
      }));
    }
  }));
}