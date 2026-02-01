import { Avatar, Box, Button, CardActions, CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';


function NoteItem({ title, description, catagory }) {
    const searchCategory = (w) => {
        console.log(w)
    }
    return (
        <div>
            <Card sx={{ width: 400, margin: 1 }}>
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between', // pushes content to top and chip to bottom
                    height: '100%' // makes CardContent take full height
                }}>

                    <Typography variant='h5' gutterBottom >
                        {title}
                    </Typography>


                    <Divider variant='full-width' sx={{ marginBottom: 1 }} />
                    <Typography variant='body2' sx={{ marginBottom: 1 }}>
                        {description}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap', // allows chips to wrap to next line
                            justifyContent: 'flex-start',
                            gap: 0.5,         // spacing between chips (horizontal & vertical)
                            mt: 'auto'        // pushes this Box to the bottom if using flex column parent
                        }}
                    >
                        {catagory.map((cat, index) => (
                            <Chip
                                key={index}
                                color="info"
                                onClick={() => searchCategory(cat)}
                                avatar={<Avatar>{cat[0]}</Avatar>}
                                label={cat}
                            />
                        ))}
                    </Box>


                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button variant="contained" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    <Button variant="contained" startIcon={<EditIcon />}>
                        Edit
                    </Button>

                </CardActions>
            </Card>
        </div >
    )
}

export default NoteItem
