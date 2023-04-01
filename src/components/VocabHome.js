import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CreateUpdateModal from './CreateUpdateModal';

function VocabHome() {
    const [word, setWord] = useState('')
    const [wordEng, setWordEng] = useState('')
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickAdd = () => {
        let vocabulary = { word, wordEng }
        fetch('http://localhost:8095/vocabulary', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vocabulary)
        })
    };

    return (
        <div className='VocabHomeDiv'>
            <Link to='/practic' className='VocabHomeLink'>
                <Button variant='outlined'  >
                    Practic
                </Button>
            </Link>
            <div className='VocabHomeLink'>
                <CreateUpdateModal
                    type={1}
                    header="Yeni Kelime Ekle"               
                />
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Vocabulary Add"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >
                                <TextField id="outlined-basic" label="Word" variant="outlined" value={word} onChange={(e) => setWord(e.target.value)} />
                            </Box>
                            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >
                                <TextField id="outlined-basic" label="WordEnglish" variant="outlined" value={wordEng} onChange={(e) => setWordEng(e.target.value)} />
                            </Box>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel </Button>
                        <Button onClick={handleClickAdd} autoFocus>
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>


            <Link to='/vocabularyList' className='VocabHomeLink' >
                <Button variant='outlined'>
                    Vocabulary List
                </Button>
            </Link>
        </div>

    )
}

export default VocabHome;