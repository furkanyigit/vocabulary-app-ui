import * as React from 'react';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function VocabHome() {
    return (
        <div className='VocabHomeDiv'>
        <Link to='/practic' className='VocabHomeLink'>
                <Box className='VocabHomeBox' >
                    Practic
                </Box>
            </Link>
            <Link to='/vocabularyAdd' className='VocabHomeLink'>
                <Box className='VocabHomeBox' >
                    Vocabulary Add 
                </Box>
            </Link>
            <Link to='/vocabularyList' className='VocabHomeLink'>
                <Box className='VocabHomeBox' >
                    Vocabulary List
                </Box>
            </Link>      
        </div>

    )
}

export default VocabHome;