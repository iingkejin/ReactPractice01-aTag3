import React from 'react'
import './Cards.css'

const Cards = () => {
  return (
    <section className="post-box">
      <Card/>
      <Card/>
      <Card/>
    </section>
  )
}

function Card(){
  return (
    <div className="post-card">
      <h2>Lorem ipsum dolor sit.</h2>
      <p className="post-card-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint aperiam tempora ratione sunt beatae alias nulla<br/>
        unde expedita suscipit quisquam natus dolores aliquam, placeat ea iusto, nesciunt, incidunt minima.
      </p>
    </div>
  )
}
 
export default Cards