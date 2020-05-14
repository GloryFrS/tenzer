import React, { useState, FunctionComponent } from 'react'
import { Main, Sidebar } from './Components'
import './App.css'

export interface Note {
  id: Number,
  title: string,
  description: string,
  dateAdd: Date
}

export interface NewNote {
  newTitle: string,
  newDescription: string
}

interface EventTargetValue {
  target: { value: string }
}


const App : FunctionComponent = () => {
  const [activeNote, setActiveNote] = useState<Note>({
    id: NaN,
    title: '',
    description: '',
    dateAdd: new Date()
  })
  const [activeNewNote, setActiveNewNote] = useState(false)
  const [edit, setEdit] = useState(false)
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : [])
  const [searchNotes, setSearchNotes] = useState<any>()

  const handleActiveNote = (data: Note) => {
    if (data.title) {
      setActiveNote(data)
      setActiveNewNote(false)
    } else {
      setActiveNewNote(prevState => !prevState)
      setEdit(false)
    }
  }

  const handleNewNote = ({ newTitle, newDescription } : NewNote) => {
    const newData = {
      id: Math.floor(Math.random() * Math.floor(9999999999)),
      title: newTitle,
      description: newDescription,
      dateAdd: new Date()
    }
    setNotes((prevNotes: any) => {
      localStorage.setItem('notes', JSON.stringify([...prevNotes, newData]))
      return [
        ...prevNotes,
        newData
      ]
    })
    setSearchNotes(false)
  }

  const handleSearch = (e: EventTargetValue) => {
    const serchArr = notes.filter((note: Note) => {
      return !note.title.toLowerCase().search(e.target.value.toLowerCase()) || !note.description.search(e.target.value)
    })

    if (e.target.value === '') { setSearchNotes(false) } else { setSearchNotes(serchArr) }
  }

  const handleSorting = (e: EventTargetValue) => {
    const sortingArray = searchNotes || notes
    const sortingResult = sortingArray.slice().sort((a: Note, b: Note) => {
      const dateA: any = new Date(a.dateAdd)
      const dateB: any = new Date(b.dateAdd)
      const result = e.target.value === 'downSort' ? (dateB - dateA) : (dateA - dateB)

      return result
    })

    if (searchNotes) {
      setSearchNotes(sortingResult)
    } else {
      setNotes(sortingResult)
    }
  }

  const handleDeleteNote = () => {
    const newArr = notes.filter((note: Note) => note.id !== activeNote.id)

    localStorage.notes = JSON.stringify(newArr)

    if (searchNotes) {
      setSearchNotes(searchNotes.filter((note: Note) => note.id !== activeNote.id))
    }

    setNotes(newArr)
    setActiveNote({
      id: NaN,
      title: '',
      description: '',
      dateAdd: new Date()
    })
  }

  const handleEditNote = (data: { editTitle: string; editDescription: string }) => {
    const newArr = notes.map((note: Note) => {
      if (note.id === activeNote.id) {
        return {
          ...note,
          title: data.editTitle,
          description: data.editDescription
        }
      }
      return note
    })

    localStorage.setItem('notes', JSON.stringify(newArr))
    setNotes(newArr)
    setEdit(false)
    setActiveNote({
      id: NaN,
      title: '',
      description: '',
      dateAdd: new Date()
    })
  }

  return (
    <div className='App'>
      <Sidebar
        notes={notes}
        handleSorting={handleSorting}
        handleActiveNote={handleActiveNote}
        handleSearch={handleSearch}
        searchNotes={searchNotes}
      />
      <Main
        activeNote={activeNote}
        handleDeleteNote={handleDeleteNote}
        handleNewNote={handleNewNote}
        activeNewNote={activeNewNote}
        handleEditNote={handleEditNote}
        edit={edit}
        setEdit={setEdit}
      />
    </div>
  )
}

export default App
