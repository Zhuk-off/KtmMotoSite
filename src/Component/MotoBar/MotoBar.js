import React from 'react'
import classes from './MotoBar.css'

export default (props) => {
  return (
    <div className="motoBar">
      <div className="tab">
        <a href="#">MX</a>
      </div>
      <div className="tab">
        <a href="#">Enduro</a>
      </div>
      <div className="tab">
        <a href="#">Freeride</a>
      </div>
      <div className="tab active">
        <a href="#">Naked</a>
      </div>
      <div className="tab ">
        <a href="#">Travel</a>
      </div>
      <div className="tab ">
        <a href="#">Sport Tourer</a>
      </div>
      <div className="tab ">
        <a href="#">Supermoto</a>
      </div>
    </div>
  )
}
