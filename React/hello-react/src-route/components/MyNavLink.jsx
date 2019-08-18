import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        return (
            // 将外部传入的所有属性传递给NavLink
            <NavLink {...this.props} activeClassName='activeClass'></NavLink>
        )
    }
}