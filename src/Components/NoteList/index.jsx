import React from 'react'
import { Note } from '../'

export default ({ data }) => {
  const listNotes = data.map((note, index) => (
    <Note note={note} key={index} />
  ))

  return (
    <>
      {listNotes}
    </>
  )
}
