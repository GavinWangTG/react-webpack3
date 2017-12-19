
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../pages/Home/Home'
import NotFount from '../pages/404'

export default class SubRouter extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route component={NotFount} />
            </Switch>
        )
    }
}