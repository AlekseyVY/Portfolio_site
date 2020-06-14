import {applyMiddleware, createStore} from "redux";
import langSelectReducer from './reducers/langSelectReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";


const store = createStore(langSelectReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store
