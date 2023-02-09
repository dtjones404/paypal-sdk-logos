/* @flow */
/** @jsx node */

import { capitalizeFirstLetter } from "@krakenjs/belter/src";
import {
  node,
  type ElementNode,
  type ComponentNode,
} from "@krakenjs/jsx-pragmatic/src";

import { LOGO_CLASS, LOGO_COLOR } from "../constants";

type SVGProps = {|
  cdnUrl?: string,
  [key: string]: mixed,
|};

export function SVG(props: SVGProps): ElementNode {
  const { cdnUrl, ...otherProps } = props;

  // $FlowFixMe
  const svgProps = {
    src: cdnUrl,
    ...otherProps,
  };

  return <img {...svgProps} />;
}

export type SVGLogoProps = {
  name: string,
  logoColor?: $Values<typeof LOGO_COLOR>,
  cdnUrl?: string,
};

export function SVGLogo({
  name,
  logoColor,
  ...props
}: SVGLogoProps): ComponentNode<SVGLogoProps> {
  return (
    <SVG
      {...props}
      alt=""
      class={`${LOGO_CLASS.LOGO} ${LOGO_CLASS.LOGO}-${name} ${
        logoColor ? `${LOGO_CLASS.LOGO_COLOR}-${logoColor}` : ""
      }`}
    />
  );
}

export type SVGCardLogoProps = {
  name: string,
  cdnUrl?: string,
};

export function SVGCardLogo({
  name,
  ...props
}: SVGCardLogoProps): ComponentNode<SVGCardLogoProps> {
  return (
    <SVG
      {...props}
      alt={capitalizeFirstLetter(name)}
      class={`${LOGO_CLASS.CARD} ${LOGO_CLASS.CARD}-${name}`}
    />
  );
}
