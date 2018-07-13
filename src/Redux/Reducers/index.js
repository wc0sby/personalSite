import {combineReducers} from 'redux';

function contacts(state = [], action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

function contents(state = [], action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

function projects(state = [], action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

const reducer = combineReducers({contacts, contents, projects})

export default reducer