import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
function Appbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <EventNoteIcon />
                    </IconButton>
                    <Typography onClick={() => window.location.reload()} variant="h6" color="inherit" component="div">
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Notes
                        </Link>
                    </Typography>
                    <Divider orientation='vertical' sx={{ mx: 1 }}>

                    </Divider>
                    <Typography variant="h6" color="inherit" component="div">
                        <Link to={'/add'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Add Note
                        </Link>
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default Appbar
