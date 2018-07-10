import {combineReducers} from 'redux';

function contact(state = [], action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

function about(state = [], action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

function projects(state = [], action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

const reducer = combineReducers({contact, about, projects})

export default reducer