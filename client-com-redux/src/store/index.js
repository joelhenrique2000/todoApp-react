import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import promise from 'redux-promise'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
export const Store = applyMiddleware(promise)(createStore)(reducers, devTools)