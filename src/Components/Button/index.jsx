import React from 'react'
import './styles.css'

export default (props) => (
  <button className='Button' {...props}>
    {props.children}
  </button>
)
