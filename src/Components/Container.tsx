import React from 'react'
import "./css/container.css"

export default function Container({children}) {
  return (
    <div className='container'>{children}</div>
  )
}
