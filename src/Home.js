import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hoşgeldiniz Oyuna başlamak için GO'ya tıklayınız</h1>
        <Link to="words">GO</Link>
      </div>
    )
  }
}


