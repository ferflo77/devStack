import React from 'react'
import ReactDom from 'react-dom'
import Root from './components/Root.jsx'
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDom.render(
  <Root store={store} />,
  document.getElementById('app')
)