// 包含n个reducer函数的模块

import {INCREMENT, DECREMENT} from './action-types'

export function counter(state=0, action){
    switch (action.type){
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state
    }

}