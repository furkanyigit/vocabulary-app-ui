import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

export default function CreateUpdateModal({ id, type, header, englishWord, turkishWord }) {
    const [open, setOpen] = useState(false);
    const [wordEng, setWordEng] = useState(englishWord);
    const [word, setWord] = useState(turkishWord);
    const [WillBeUpdateId, setWillBeUpdateId] = useState(id);


    const handleClickOpen = () => {
        setOpen(true);
    };

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
        handleClose();
    };
    const handleClickUpdate = () => {
        setWillBeUpdateId(id)
        let vocabulary = { word, wordEng }
        fetch(`http://localhost:8095/vocabulary/${WillBeUpdateId}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(vocabulary)
        })
        handleClose();
      }; 
    

    return (
        <div>
            {type == 1
                ?
                <Button variant="outlined" style={{ width: 250, height:75}} onClick={handleClickOpen}>
                    Kelime Ekle
                </Button>
                :
                <EditIcon style={{ width: 50, color: 'black' }} onClick={handleClickOpen}></EditIcon>
            }
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{header}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Türkçe"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="İnglizce"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={wordEng}
                        onChange={(e) => setWordEng(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Vazgeç</Button>
                    {type == 1
                        ?
                        <Button onClick={handleClickAdd}>Ekle</Button>
                        :
                        <Button onClick={handleClickUpdate}>Güncelle</Button>
                    }
                </DialogActions>
            </Dialog>
        </div>
    );
}