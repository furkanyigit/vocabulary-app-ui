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

function VocabHome({header}) {
    const [word, setWord] = useState('')
    const [wordEng, setWordEng] = useState('')

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