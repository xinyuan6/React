// redux最核心的管理对象store

import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)