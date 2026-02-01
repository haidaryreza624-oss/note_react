import React, { useEffect, useState } from 'react'
import NoteItem from './NoteItem'
import Masonry from '@mui/lab/Masonry';
import BasicModal from './BasicModal.jsx'

function Noteboard() {
    const url = 'http://localhost:8080/notes'
    const [Notes, setNotes] = useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const searchCategory = (cat) => {
        console.log(cat)
    }
    const handleDelete = (id) => {
        
        handleOpen()
        console.log(id)
    }
    const handleEdit = (id) => {
        console.log(id)
    }

    useEffect(() => {
        fetch(url)
            .then(item => item.json())
            .then(data => setNotes(data))

    }, [])
    return (
        <>
        
        <Masonry columns={3} spacing={1} sequential={true}>
            {Notes.map((note, index) => {
                return <NoteItem  searchCategory={searchCategory} handleDelete={handleDelete} handleEdit={handleEdit} catagory={note.category} id={note.id} title={note.title} description={note.description} key={index} />
            })}
        </Masonry>
        {open && <BasicModal open={open} handleClose = {handleClose} />}

        </>

    )
}

export default Noteboard
