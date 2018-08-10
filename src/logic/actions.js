import { ADD_ITEM } from './constants';
import { DEL_ITEM } from './constants';
import { COMPLETE_ITEM } from './constants';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const delItem = content => {
  return { type: DEL_ITEM, content };
};

export const completeItem = content => {
  return { type: COMPLETE_ITEM, content };
};
