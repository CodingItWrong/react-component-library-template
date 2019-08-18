import React, { Component } from 'react'

// using a class component to confirm class properties work
export default class HelloWorld extends Component {
  state = { name: 'world' }

  render() {
    return <div>Hello, {this.state.name}!</div>
  }
}
