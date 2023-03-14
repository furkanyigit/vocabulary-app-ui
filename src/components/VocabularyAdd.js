import React from 'react'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Link } from 'react-router-dom';


function VocabularyAdd() {
    const [word, setWord] = useState('')
    const [wordEng, setWordEng] = useState('')
    

    const handleClickAdd = () =>{
        let vocabulary = {word, wordEng}
        fetch('http://localhost:8095/vocabulary',{
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
      <div className='VocabHomeLink'>
        <Box className='VocabHomeBox' >
            <div className='VocabularyAddBoxDiv'>
            <textarea typeof='text' className='VocabularyAddTextArea' value={word} onChange={(e) =>{setWord(e.target.value)}}> </textarea>
            <textarea typeof='text' className='VocabularyAddTextArea' value={wordEng} onChange={(e) =>{setWordEng(e.target.value)}}> </textarea>
            <button className='VocabularyAddButton' onClick={handleClickAdd}> Add </button>
            <Link to="/vocabHome" className='Link'>
            <button className='VocabularyAddButton'> Cancel </button>
            </Link>
            
            </div>
        </Box>
      </div>
    </div>
  )
}

export default VocabularyAdd