import React from 'react'
import './cardEvents.css'
import roller1 from '../../assets/roller1.jpg'

function CardEvents() {
  return (
    <div className="container-events">
      <img src={roller1} alt="" />
      <div className="container-text-events">
        <h4>
          <strong>Skate love BTN 2025</strong>
        </h4>
        <p>Barcelona 26,27,28 Sep</p>
      </div>
    </div>
  )
}

export default CardEvents
