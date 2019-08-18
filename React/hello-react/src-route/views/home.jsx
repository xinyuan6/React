import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import MyNavLink from '../components/MyNavLink'
import News from './news'
import Message from './message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>home route component</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message'>Message</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path='/home/news' component={News}></Route>
                            <Route path='/home/message' component={Message}></Route>
                            <Redirect to='/home/news'></Redirect>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}