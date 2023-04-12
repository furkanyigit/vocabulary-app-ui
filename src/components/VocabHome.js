import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import CreateUpdateModal from './CreateUpdateModal';

function VocabHome({header}) {

    return (
        <div className='VocabHomeDiv'>
            <Link to='/practic' className='VocabHomeLink'>
                <Button style={{width: 250, height:75 }} variant='outlined'  >
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
                <Button style={{ width: 250, height:75 }} variant='outlined'>
                    Kelime Listesi
                </Button>
            </Link>
        </div>

    )
}

export default VocabHome;