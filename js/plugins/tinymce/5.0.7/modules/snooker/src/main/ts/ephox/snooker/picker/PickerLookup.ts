import { Attr, SelectorFilter, SelectorFind } from '@ephox/sugar';
import Structs from '../api/Structs';
import PickerStyles from './PickerStyles';

const CELL_SELECTOR = '.' + PickerStyles.cell();
const ROW_SELECTOR = '.' + PickerStyles.row();

// TODO: refactor to build up references at picker creation time (PickerUi.recreate)

const cells = function (ancestor) {
  return SelectorFilter.descendants(ancestor, CELL_SELECTOR);
};

const rows = function (ancestor) {
  return SelectorFilter.descendants(ancestor, ROW_SELECTOR);
};

const attr = function (element, property) {
  return parseInt(Attr.get(element, property), 10);
};

const grid = function (element, rowProp, colProp) {
  const rowsCount = attr(element, rowProp);
  const cols = attr(element, colProp);
  return Structs.grid(rowsCount, cols);
};

const button = function (cell) {
  return SelectorFind.child(cell, '.' + PickerStyles.button()).getOr(cell);
};

export default {
  cells,
  rows,
  grid,
  button
};