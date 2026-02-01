import React, { useContext, useEffect, useState } from 'react'
import NoteItem from './NoteItem'
import Masonry from '@mui/lab/Masonry';
import BasicModal from './BasicModal.jsx'
import { useNavigate } from 'react-router-dom';


function Noteboard() {
    const url = "http://localhost:8080/notes"
    const [Notes, setNotes] = useState([])
    const [open, setOpen] = React.useState(false);
    const [id_d, setid] = useState(0)
    const [fetching, setFethcing] = useState(false)
    const handleOpen = (id) => {
        setid(id)
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const searchCategory = (cat) => {
        fetch(url)
            .then(item => item.json())
            .then(data => {
                const a = data.filter(n => n.category.includes(cat))
                setNotes(a)
            })
    }

    const handleDelete = () => {
        handleClose()

        fetch(`${url}/${id_d}`, { method: 'DELETE', })
            .then(t => console.log("Delete"))
            .catch(e => console.log(e))
        setFethcing(true)
    }

    const navigate = useNavigate()
    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    useEffect(() => {
        fetch(url)
            .then(item => item.json())
            .then(data => setNotes(data))
        setFethcing(false)
    }, [fetching])
    return (
        <>
            <Masonry columns={3} spacing={1} sequential={true}>
                {Notes.map((note, index) => {
                    return <NoteItem searchCategory={searchCategory} handleDelete={handleOpen} handleEdit={handleEdit} catagory={note.category} id={note.id} title={note.title} description={note.description} key={index} />
                })}
            </Masonry>
            {open && <BasicModal open={open} handleClose={handleClose} handleDelete={handleDelete} />}
        </>

    )
}

export default Noteboard
