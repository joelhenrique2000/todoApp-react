import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { Provider } from 'react-redux'
import { Store } from './store'

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
    , document.querySelector('.container'))