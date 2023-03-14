import * as React from 'react';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function Practic() {
  return (
    <div className='VocabHomeDiv'>
    <Link to='/firstbox' className='VocabHomeLink'>
            <Box className='VocabHomeBox' >
                First Box
            </Box>
        </Link>
        <Link to='/secondbox' className='VocabHomeLink'>
            <Box className='VocabHomeBox' >
                Second Box
            </Box>
        </Link>
        <Link to='/thirdbox' className='VocabHomeLink'>
            <Box className='VocabHomeBox' >
                Third Box
            </Box>
        </Link>      
    </div>
  )
}

export default Practic