
// 包含所有的action creator
// 同步的action返回一个对象
// 异步的action返回一个函数

import { INCREMENT, DECREMENT } from "./action-types";

export const increment = (number) => ({ type: INCREMENT, data: number })
export const decrement = (number) => ({ type: DECREMENT, data: number })
export const incrementAsync = (number) => {
    return dispatch => {
        // 异步的代码
        setTimeout(() => {
            // 一秒之后才分发一个增加的action
            dispatch(increment(number))
        }, 1000)
    }
}