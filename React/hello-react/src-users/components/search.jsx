import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
    state = {
        content: ''
    }

    static propTypes = {
        setSearchName: PropTypes.func.isRequired
    }

    search = () => {
        // 得到输入的关键字
        const content = this.state.content.trim()
        if (content){
            // 搜索
            this.props.setSearchName(content)
            this.state.content = ''
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