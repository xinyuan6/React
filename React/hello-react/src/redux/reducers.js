// 包含n个reducer函数（根据老的state和action返回一个新的state）
import { combineReducers } from 'redux'

import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS } from './action-types'

// const initComments = [
//     { username: 'Tom', content: 'react很好' },
//     { username: 'Jack', content: 'react太难啦' }
// ]

const initComments = []

function comments(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state]
        case DELETE_COMMENT:
            return state.filter((comment, index) => index !== action.data)
        case RECEIVE_COMMENTS:
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    comments,
})

// redux向外暴露的state的结构：getState（）得到的
// 是对象
// {counter: , comments: }