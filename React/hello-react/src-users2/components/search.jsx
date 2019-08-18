import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js' 

export default class Search extends Component {
    state = {
        content: ''
    }

    search = () => {
        // 得到输入的关键字
        const content = this.state.content.trim()
        if (content){
            // 搜索
            // 发布消息（search）
            PubSub.publish('search', searchName)
        }
    }

    handleChange = (event) => {
        const content = event.target.value
        this.setState({content})
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" value={this.state.content} onChange={this.handleChange} />
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}