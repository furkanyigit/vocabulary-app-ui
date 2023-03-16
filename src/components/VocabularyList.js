import { React } from 'react'
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function VocabularyList() {
  const { wordList } = useContext(GlobalContext);
  console.log(wordList)

  // handleDeleteWord = (id) => {
    
  //   fetch (`ttp://localhost:8095/vocabulary/${id}`,{
  //     method : 'DELETE'
  //   }).then((result) => {
      
  //   })

  // }

  return (
    <div className='VocabHomeDiv'>
      <Grid className='VocabHomeLink'>
        <Box className='VocabHomeBox' sx={{ backgroundColor: '#880e4f' }}>
          1. Box
        </Box>
      </Grid>
      <Grid className='VocabHomeLink' >
        <Box className='VocabHomeBox' sx={{ backgroundColor: '#388e3c' }}>
          2. Box

        </Box>
      </Grid>
      <Grid className='VocabHomeLink' >
        <Box className='VocabHomeBox' sx={{ backgroundColor: '#4527a0' }}>
          3. Box
        </Box>
      </Grid>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Word</TableCell>
            <TableCell align="center">Word English</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell align="right">Update/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {wordList.map((row) => (
            <TableRow>
              <TableCell align="center">{row.word}</TableCell>
              <TableCell align="center">{row.wordEng}</TableCell>
              <TableCell align="center">{row.count}</TableCell>
              <TableCell align="right"><Button>Update</Button> / <Button
              //  onClick={handleDeleteWord}
               >Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default VocabularyList