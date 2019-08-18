import React, { Component } from 'react'
import { Button, Toast } from 'antd-mobile'

export default class App extends Component {

    handleClick = () => {
        Toast.info('submit success', 1)
    }

    render() {
        return (
            <div>
                <Button type='primary' onClick={this.handleClick}>start</Button>
            </div>
        )
    }
}