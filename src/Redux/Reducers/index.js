import {combineReducers} from 'redux';

function initial(state = [], action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

const reducer = combineReducers({initial})

export default reducer