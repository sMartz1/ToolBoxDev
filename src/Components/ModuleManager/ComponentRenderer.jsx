import React from 'react'
import './ComponentRenderer.scss'
export default function ComponentRenderer({children}) {

  return (
    <div className='module-container'>
        {children}
    </div>
  )
}
