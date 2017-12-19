
import React from 'react'
import {HashRouter} from 'react-router-dom'

export default class Home extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="box">首页sddsdffs</div>
        )
    }
    componentDidMount() {
        //console.log(browserHistory)
    }
    componentDidUpdate() {
        console.log('更新了')
    }
}