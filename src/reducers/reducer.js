import ActionTypes from '../constants/action-type';
import { Map as makeMap } from 'immutable';

export const initialState =  makeMap({

});

const reducer = (state = initialState, action) => {

  if (!action.type) {
    console.log('Payload missing a type!', action);
  }

  switch (action.type) {
    case ActionTypes.SIMPLE_ACTION: {
      state = state.set('simpleActionResponse', action.payload);
      return state;
    }
    default:
      return state
  }
 }

 export default reducer;