import { Box, Button, IconButton, TableHead, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { MySpaceContainer } from './style';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';

  
  function createData(name, calories, fat) {
    return { name, calories, fat };
  }
  
  const rows = [
    createData('Cupcake', 305, 3.7),
    createData('Donut', 452, 25.0),
    createData('Eclair', 262, 16.0),
    createData('Frozen yoghurt', 159, 6.0),
    createData('Gingerbread', 356, 16.0),
    createData('Honeycomb', 408, 3.2),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Jelly Bean', 375, 0.0),
    createData('KitKat', 518, 26.0),
    createData('Lollipop', 392, 0.2),
    createData('Marshmallow', 318, 0),
    createData('Nougat', 360, 19.0),
    createData('Oreo', 437, 18.0),
  ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const MySpace = () => {

    const [page, setPage] = React.useState(0);
    const[file, setFile] = useState('')
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
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

    const fileUpload = (event) => {
        setFile(event.target.files[0].name)
    }

    console.log(file)

  return (
    <MySpaceContainer>
        <Box className='top-bar'>
            <Button variant='contained' className='upload-btn' component='label'>
                <Typography variant='body1' textTransform='Capitalize'>Upload</Typography>
                <AddIcon sx={{fontSize:'25px'}}/>
                <input hidden accept="image/*" multiple type="file" onChange={fileUpload}/>
            </Button>
            <TableContainer sx={{background:'inherit'}}>
                <Table>
                    <TableHead>
                        <TableRow sx={{"& th":{color:'white'}}}>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        </TableRow>
                     </TableHead>

                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row) => (
                            <TableRow key={row.name} sx={{"& th":{color:'white'}}}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell style={{ width: 160, color:'white' }} align="right">
                                    {row.calories}
                                </TableCell>
                                <TableCell style={{ width: 160, color:'white' }} align="right">
                                    {row.fat}
                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }} >
                            <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TablePagination 
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            sx={{color:'white',
                                "& .MuiTablePagination-menuItem":{
                                    color:'black',
                                },

                            }}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{ native: true }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
            </Table>
            </TableContainer>
                </Box>
            </MySpaceContainer>
  )
}

export default MySpace