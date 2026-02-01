import React, { useEffect, useState } from 'react'
import NoteItem from './NoteItem'

function Noteboard() {
    const url = 'http://localhost:8080/notes'
    const [Notes, setNotes] = useState([])
    useEffect(() => {
        fetch(url)
            .then(item => item.json())
            .then(data => setNotes(data))

    }, [])
    return (
        <>
            {Notes.map((note, index) => {
                return <NoteItem catagory={note.category} title={note.title} description={note.description} key={index} />
            })}
        </>
    )
}

export default Noteboard
