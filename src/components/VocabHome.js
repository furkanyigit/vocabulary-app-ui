import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function VocabHome() {
    return (
        <div className='VocabHomeDiv'>
        <Link to='/practic' className='VocabHomeLink'>
                <Button variant='outlined'  >
                    Practic
                </Button>
            </Link>
            <Link to='/vocabularyAdd' className='VocabHomeLink' >
                <Button variant='outlined'>
                    Vocabulary Add

                </Button>
            </Link>
            <Link to='/vocabularyList' className='VocabHomeLink' >
                <Button variant='outlined'>
                    Vocabulary List
                </Button>
            </Link>      
        </div>

    )
}

export default VocabHome;