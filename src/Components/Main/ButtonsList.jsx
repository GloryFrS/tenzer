import React from 'react'
import { Button } from '../'

export default ({ config = [] }) => config.map((item, index) => (<Button key={index} {...item.options}>{item.title}</Button>))
