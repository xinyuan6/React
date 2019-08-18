import React, { Component } from 'react'

const allMessages = [
    { id: 1, title: 'message001', content:'侃猪' },
    { id: 3, title: 'message003', content:'侃猪猪' },
    { id: 5, title: 'message005', content:'侃猪猪猪' }
]
export default function MessageDetail(props) {

    // 得到请求参数中的id
    const {id} = props.match.params
    // debugger
    // 查询得到对应的message
    // 返回第一个结果为true的数组元素
    const message =  allMessages.find(message => message.id == id)

    return (
        <ul>
            <li>ID: {message.id}</li>
            <li>TITLE: {message.title}</li>
            <li>CONTENT: {message.content}</li>
        </ul>
    )

}