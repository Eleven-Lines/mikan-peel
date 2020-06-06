import React from 'react'
import { render } from 'react-dom'
import App from './App'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

const Element = React.createElement(App)

render(Element, document.getElementById('app'))
