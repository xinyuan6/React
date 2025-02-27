import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import App from './containers/app'
import store from './redux/store'

// import 'antd-mobile/dist/antd-mobile.css';




ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'))


