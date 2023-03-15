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
  const showBtn = props.name === 'front-txt' ? true : false;

  return (
    <section className={props.layout}>
      <div className={props.name}>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint aperiam tempora ratione sunt beatae alias nulla<br/>
          unde expedita suscipit quisquam natus dolores aliquam, placeat ea iusto, nesciunt, incidunt minima.
        </p>
        {
          // showBtn이 true일 때만 button을 렌더링
          // 둘 다 true일 경우에만 버튼을 렌더링하고
          // 좌항이 false일 경우 바로 false를 반환한다
          showBtn && <button className="front-btn">버튼</button>
        }
        
      </div>
    </section>
  )
}

export default Main