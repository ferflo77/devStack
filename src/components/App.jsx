import React from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../actions/incrementAction'

const incrementAction = {
  type: 'INCREMENT'
}

const App = (props) => (
  <h1 onClick={props.doIncrement.bind(this,1)}>Hello world {props.count} times</h1>
)

function mapStateToProps(state) {
  return {
    count: state.increment.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doIncrement: (amount) => { dispatch(addNumber(amount)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
