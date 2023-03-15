import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <main>
      <Ipsum layout='background' name='front-txt'/>
      <Ipsum layout='top' name='second-txt'/>
    </main>
  )
}

function Ipsum(props) {
  return (
    <section className={props.layout}>
      <div className={props.name}>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint aperiam tempora ratione sunt beatae alias nulla<br/>
          unde expedita suscipit quisquam natus dolores aliquam, placeat ea iusto, nesciunt, incidunt minima.
        </p>
        <button className='front-btn'>버튼</button>
      </div>
    </section>
  )
}

export default Main