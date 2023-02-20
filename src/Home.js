import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./popup.css";

export default class Home extends Component {
  render() {
    return (
      <>
      <div className="home">
        <div className="home-inner">
      <h1 style={{marginTop:10}}>Hoşgeldiniz!</h1>
      <p className='info'>Oyun 5 seviyeden oluşmaktadır. Her seviyede, belirtilen süre içerisinde istenilen kelimeleri doğru yazmalısınız. Artırılan süreler ek puan, yanlış yazılan her kelime eksi puan olarak yansıyacaktır. İyi oyunlar...</p>
      <button className='ok-btn' ><Link style={{ textDecoration: 'none' , color:"black", padding:5 }} to="words">BAŞLA</Link></button>
      </div>
    </div>

      </>
    )
  }
}


