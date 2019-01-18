import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import promise from 'redux-promise'
import multi from 'redux-multi'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
export const Store = applyMiddleware(multi, promise)(createStore)(reducers, devTools)