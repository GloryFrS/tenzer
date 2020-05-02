import React, { useState } from 'react'
import { Main, Sidebar } from './Components'
import './App.css'

const App = () => {
  const [activeNote, setActiveNote] = useState({})
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : [])

  const handleNewNote = (data) => {
    data = {
      title: 'title',
      description: 'description',
      dateAdd: new Date()
    }
    setNotes(prevNotes => {
      localStorage.setItem('notes', JSON.stringify([...prevNotes, data]))
      return [
        ...prevNotes,
        data
      ]
    })
  }

  const handleDeleteNote = () => {
    const newArr = notes.filter((note, index) => index !== activeNote.index)

    localStorage.notes = JSON.stringify(newArr)
    setNotes(newArr)
    setActiveNote({})
  }

  return (
    <div className='App'>
      <Sidebar
        setActiveNote={setActiveNote}
        notes={notes}
        handleNewNote={handleNewNote}
        setNotes={setNotes}
      />
      <Main
        activeNote={activeNote}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  )
}

export default App
