import React from 'react'
import './Blog.css'
import {useState} from 'react';

const Blog = () => {
  const [title, setTitle] = useState([
    "Title1",
    "Title2",
    "Title3",
  ])
  
  return (
    <div>
      <div className='nav'>
        <h1>BLOG</h1>
      </div>

      {
        title.map((item)=>{
          return (
            <div className='list'>
              <h4>{item}</h4>
              <p>안녕하세요 저는 000 입니다.</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Blog