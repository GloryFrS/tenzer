import React from 'react'
import { Button } from '..'

interface Options {
  disabled: Boolean,
  onClick: () => any
}

interface Button {
  title: string,
  options: Options
}

export default ({ config = [] }) => config.map((item: Button, index) => (<Button key={index} {...item.options}>{item.title}</Button>))
