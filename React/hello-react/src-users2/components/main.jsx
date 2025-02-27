import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Main extends Component {

    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }

    componentDidMount() {
        // 订阅消息（search）
        PubSub.subscribe('search', (msg, searchName) => {
            // 指定了新的searchName，需要请求
            // 发请求前，先更新状态（）请求中
            this.setState({ initView: false, loading: true });
            // 发送ajax请求
            const url = `https://api.github.com/search/users?q=${searchName}`
            axios.get(url)
                .then(response => {
                    // 得到相应数据
                    const result = response.data
                    const users = result.items.map((user, index) => {
                        return { name: user.login, url: user.html_url, avatarUrl: user.avatar_url }
                    })
                    // console.log(result)
                    // 更新状态（users）
                    this.setState({ loading: false, users })
                })
                .catch(error => {
                    // 更新状态（errorMsg）
                    this.setState({ loading: false, errorMsg: error.message })
                })
        })
    }

    render() {

        const { initView, loading, users, errorMsg } = this.state
        const { searchName } = this.props

        if (initView) {
            return <h2>请输入关键字进行搜索:{searchName}</h2>
        } else if (loading) {
            return <h2>Loading...</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((user, index) => (
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} style={{ width: 100 }} />
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }


                </div>
            )
        }

    }
}