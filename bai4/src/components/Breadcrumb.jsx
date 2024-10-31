import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ list }) {
  return (
    <div style={{display:'flex',gap:5,fontSize:20}}>
      {
        list.map((item, index) => {
          if(item.link){
            return <div key={index} >
              <Link style={{color:'orange', textDecoration:'none',}} to={item.link}>{item.name}</Link>
              <span> /</span>
            </div>
          }
          return <span key={index}>{item.name}</span>
        })
      }
    </div>
  )
}
