import { createStore } from 'redux'
import reducers from './Redux/Reducers'
import state from './state'

const store = createStore(reducers,state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;