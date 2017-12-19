
import React from 'react'
import {render} from 'react-dom'
import AppRouter from './router/AppRouter'

import './static/scss/main.scss'

render(
    <AppRouter />,
    document.getElementById('app')
)