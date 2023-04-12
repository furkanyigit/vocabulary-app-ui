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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from 'react';
import CreateUpdateModal from './CreateUpdateModal';
// basic tabs

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// table
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

function VocabularyList() {
  const [wordListAllData, setWordListAllData] = useState([]);
  const [wordList, setWordList] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(2);
  const [value, setValue] = useState(0);
  const [willBeDeleteId, setWillBeDeleteId] = useState();
  const [willBeDeleteWord, setWillBeDeleteWord] = useState();
  const [willBeDeleteWordEnglish, setWillBeDeleteWordEnglish] = useState();

  // Delete Form
  const [deleteDialog, setDeleteDialog] = React.useState(false);

  const deleteDialogOpen = (id,word, wordEng) => {
    setDeleteDialog(true);
    setWillBeDeleteWord(word);
    setWillBeDeleteWordEnglish(wordEng);
    setWillBeDeleteId(id);
  };

  const deleteDialogClose = () => {
    setDeleteDialog(false);
  };

  const handleClickDelete = () => {
    fetch(`http://localhost:8095/vocabulary/${willBeDeleteId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    deleteDialogClose();
    getVocabulary();
  };

  //tabs
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Table
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  //BackEnd
  const handleChanceBox1 = () => {
    console.log("burası calıstı box1");
    setCount1(0);
    setCount2(2)
    setPage(0);
  }
  const handleChanceBox2 = () => {
    console.log("burası calıstı box2");
    setPage(0);
    setCount1(3);
    setCount2(5);
  }
  const handleChanceBox3 = () => {
    console.log("burası calıstı box3");
    setCount1(6);
    setCount2(20);
    setPage(0);
  }

  useEffect(() => {
    getVocabulary()
  }, [page,rowsPerPage,count2])

  function getVocabulary() {
    fetch(`/vocabulary/pageable?page=${page}&size=${rowsPerPage}&count1=${count1}&count2=${count2}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(
        (result) => {
          setWordListAllData(result)
          setWordList(result.content)
        }
      )
  }

  return (
    <>
      <Box sx={{minWidth: 1000 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab style={{ width: 333}} label="birinci torba" {...a11yProps(0)} onClick={handleChanceBox1} />
            <Tab style={{ width: 333}} label="ikinci torba" {...a11yProps(1)} onClick={handleChanceBox2} />
            <Tab style={{ width: 334}} label="ucuncu torba" {...a11yProps(2)} onClick={handleChanceBox3} />
          </Tabs>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} aria-label="custom pagination table">
        <TableBody>
            {wordList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" style={{ width: 250 }}>{row.word} </TableCell>
                <TableCell align="left" style={{ width: 250 }}>{row.wordEng}</TableCell>
                <TableCell align="left" style={{ width: 250 }}>{row.count}</TableCell>
                <TableCell align="right" style={{ width: 100 }}>
                        <Stack direction='row'>
                        <CreateUpdateModal
                            type={2}
                            header="Kelime Güncelle"
                            id={row.id}
                            englishWord={row.wordEng}
                            turkishWord={row.word}
                            style={{ width: 50 }}
                          />
                          <DeleteForeverIcon align="right" style={{ width: 50 }} onClick={()=>deleteDialogOpen(row.id,row.word,row.wordEng)} />
                          <Dialog
                            open={deleteDialog}
                            onClose={deleteDialogClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              {"Kelime silinecek eminmisiniz ?"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                {willBeDeleteWord} : {willBeDeleteWordEnglish}
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={deleteDialogClose}>Vazgeç</Button>
                              <Button onClick={handleClickDelete} autoFocus>
                                Sil
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </Stack>
                      </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: parseInt(wordListAllData.totalElements) }]}
                colSpan={3}
                count={parseInt(wordListAllData.totalElements)}
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

export default VocabularyList