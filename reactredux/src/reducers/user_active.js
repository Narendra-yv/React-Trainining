import {
    SELECT_USER
  } from '../actions/types';
  
  export default function(state = {}, action) {
    console.log('Action payload', action.payload)
    console.log(action.type);
    
    switch (action.type) {
      case SELECT_USER:
        return action.payload;
    }
    return state;
  }
  