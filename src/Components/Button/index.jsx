import React from 'react'
import './styles.css'

export default (props) => (
  <button {...props} className={`Button ${props.className ? props.className : ''}`}>
    {props.children}
  </button>
)
