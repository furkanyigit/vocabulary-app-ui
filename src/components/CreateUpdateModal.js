import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';

export default function CreateUpdateModal({ type, header, englishWord, turkishWord }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {type == 1
                ?
                <Button variant="outlined" onClick={handleClickOpen}>
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
                        label="İnglizce"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={englishWord}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Türkçe"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={turkishWord}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Vazgeç</Button>
                    <Button onClick={handleClose}>Onayla</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}