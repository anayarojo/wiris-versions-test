import { Struct } from '@ephox/katamari';
import { Element } from '@ephox/sugar';
import { AnchorBox } from './LayoutTypes';
import * as Origins from './Origins';
import { OriginAdt } from './Origins';

/*
 * Smooths over the difference between passing an element anchor (which requires an origin to determine the box) and passing a box.
 *
 * It is only useful for fixed origins; relative needs to do everything the old way.
 */
export interface Anchor {
  anchorBox: () => AnchorBox;
  origin: () => OriginAdt;
}

const anchor: (anchorBox: AnchorBox, origin: OriginAdt) => Anchor = Struct.immutable('anchorBox', 'origin');

const element = (anchorElement: Element, origin: OriginAdt): Anchor => {
  const anchorBox = Origins.toBox(origin, anchorElement);

  return anchor(anchorBox, origin);
};

const box = (anchorBox: AnchorBox, origin: OriginAdt): Anchor => {
  return anchor(anchorBox, origin);
};

export {
  box,
  element
};