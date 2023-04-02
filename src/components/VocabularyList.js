import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import wordList from '../context/GlobalState';
import { useState } from 'react';
import CreateUpdateModal from './CreateUpdateModal';
import Stack from '@mui/material/Stack';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const rows = wordList.length;

function VocabularyList() {
  const { wordList } = useContext(GlobalContext);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [word, setWord] = useState('')
  const [wordEng, setWordEng] = useState('')
  const [open, setOpen] = useState(false);
  const [sayı1, setSayı1] = useState(0);
  const [sayı2, setSayı2] = useState(3);

  const selectBox1 = () => {
    setSayı1(0);
    setSayı2(3)
  }
  const selectBox2 = () => {
    setSayı1(3);
    setSayı2(6)
  }
  const selectBox3 = () => {
    setSayı1(6);
    setSayı2(9)
  }


  const handleClickOpen = () => {
    console.log(open)
    setOpen(true);

    console.log("tiklandi")
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAdd = (id) => {
    let vocabulary = { word, wordEng }
    fetch(`http://localhost:8095/vocabulary/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(vocabulary)
    })
    handleClose();
  };


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  return (

    <>
      <div className='VocabHomeDiv' >
        <div to='/firstbox' className='VocabHomeLink'>
          <Box className='VocabHomeBox' onClick={selectBox1} >
            First Box
          </Box>
        </div>
        <div to='/secondbox' className='VocabHomeLink'>
          <Box className='VocabHomeBox' onClick={selectBox2} >
            Second Box
          </Box>
        </div>
        <div to='/thirdbox' className='VocabHomeLink'>
          <Box className='VocabHomeBox' onClick={selectBox3} >
            Third Box
          </Box>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} aria-label="custom pagination table">
          <TableBody>
            {
              (rowsPerPage > 0
                ? wordList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : wordList
              ).map((row) => {
                if (sayı1 <= row.count && row.count < sayı2) {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.word}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.wordEng}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.count}
                      </TableCell>
                      <TableCell align="right">
                        <Stack direction='row'>
                          <CreateUpdateModal
                            type={2}
                            header="Kelime Düzenleme"
                            englishWord={row.wordEng}
                            turkishWord={row.word}
                            style={{ width: 50 }}
                          />
                          <DeleteForeverIcon style={{ width: 50 }}></DeleteForeverIcon>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  )
                }
              })}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={wordList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
export default VocabularyList;
