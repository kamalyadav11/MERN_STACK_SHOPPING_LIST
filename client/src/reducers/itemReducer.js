import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Candy' },
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Burger' },
    { id: uuid(), name: 'Pizza' },
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;  
  }
}
