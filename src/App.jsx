import React, { useState } from 'react'
import { Main, Sidebar } from './Components'
import './App.css'

const App = () => {
  const [activeNote, setActiveNote] = useState({})
  const [activeNewNote, setActiveNewNote] = useState(false)
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : [])

  const handleNewNote = ({ newTitle, newDescription }) => {
    const newData = {
      title: newTitle,
      description: newDescription,
      dateAdd: new Date()
    }
    setNotes(prevNotes => {
      localStorage.setItem('notes', JSON.stringify([...prevNotes, newData]))
      return [
        ...prevNotes,
        newData
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
        setNotes={setNotes}
        handleActiveNewNote={setActiveNewNote}
      />
      <Main
        activeNote={activeNote}
        handleDeleteNote={handleDeleteNote}
        handleNewNote={handleNewNote}
        activeNewNote={activeNewNote}
      />
    </div>
  )
}

export default App
