import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { IconButton, TextField, Input, InputAdornment } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },

    },
}))(TableRow);



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    TableContainer:{
        boxShadow:'0 0 20px'
    }
});

export default function CustomizedTables(props) {
    const classes = useStyles();

    return (
        <TableContainer className={classes.TableContainer} component={Paper}>

            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" colSpan={3}>
                            <h4>ECE</h4>
                        </TableCell>
                        <TableCell align="right" colSpan={3}>
                            <Input
                                placeholder='Search'
                                startAdornment={

                                    <InputAdornment position="start">
                                        <SearchIcon />

                                    </InputAdornment>
                                }

                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton style={{ outline: 'none' }} >
                                            <CloseIcon />
                                        </IconButton >

                                    </InputAdornment>
                                }
                            />
                            <IconButton style={{ outline: 'none' }} >
                                <AddBoxIcon onClick={() => props.isAdd()} />
                            </IconButton >
                        </TableCell>

                    </TableRow>
                    <TableRow>

                        <StyledTableCell>Image</StyledTableCell>
                        <StyledTableCell align="left"> productName</StyledTableCell>
                        <StyledTableCell align="left">description</StyledTableCell>
                        <StyledTableCell align="left">price</StyledTableCell>
                        <StyledTableCell align="left">quntity</StyledTableCell>
               
                        <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.add ?
                        <>
                            <StyledTableCell component="th" scope="row">
                                <TextField
                                    error={props.error.imageError}
                                    helperText={props.error.imageError ? "Incorrect entry." : null}
                                    name='productImage' id="standard-basic"
                                    onChange={props.handelChange}
                                />
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <TextField
                                    error={props.error.nameError}
                                    helperText={props.error.nameError ? "Incorrect entry." : null}
                                    name='productName'
                                    id="standard-basic"
                                    onChange={props.handelChange}
                                />
                            </StyledTableCell>
                            {/* <StyledTableCell align="left">
                                <TextField
                                    error={props.error.companyError}
                                    helperText={props.error.companyError ? "Incorrect entry." : null}
                                    name='company'
                                    id="standard-basic"
                                    onChange={props.handelChange} />
                            </StyledTableCell> */}
                            <StyledTableCell align="left">
                                <TextField
                                    error={props.error.priceError}
                                    helperText={props.error.priceError ? "Incorrect entry." : null}
                                    name='price'
                                    id="standard-basic"
                                    onChange={props.handelChange}
                                />
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <TextField
                                    error={props.error.priceError}
                                    helperText={props.error.priceError ? "Incorrect entry." : null}
                                    name='quantity'
                                    id="standard-basic"
                                    onChange={props.handelChange}
                                />
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <TextField
                                    error={props.error.priceError}
                                    helperText={props.error.priceError ? "Incorrect entry." : null}
                                    name='category'
                                    id="standard-basic"
                                    onChange={props.handelChange}
                                />
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <TextField
                                    error={props.error.priceError}
                                    helperText={props.error.priceError ? "Incorrect entry." : null}
                                    name='description'
                                    id="standard-basic"
                                    onChange={props.handelChange}
                                />
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <IconButton aria-label="delete" style={{ outline: 'none' }} >
                                    <DoneIcon onClick={() => props.addData(true)} />
                                </IconButton >
                                <IconButton aria-label="delete" style={{ outline: 'none' }} >
                                    <CloseIcon onClick={() => props.addData(false)} />
                                </IconButton >
                            </StyledTableCell>
                        </> : null

                    }
                    {
                        props.data.map(row => (
                            <StyledTableRow hover key={row.id}>
                                {row.edit ?

                                    <>
                                        <StyledTableCell component="th" scope="row">
                                            <TextField
                                                error={props.error.imageError}
                                                helperText={props.error.imageError ? "Incorrect entry." : null}
                                                name='productImage' id="standard-basic" defaultValue={row.productImage}
                                                onChange={props.handelChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <TextField
                                                error={props.error.nameError}
                                                helperText={props.error.nameError ? "Incorrect entry." : null}
                                                name='pName'
                                                id="standard-basic"
                                                defaultValue={row.productName}
                                                onChange={props.handelChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <TextField
                                                error={props.error.companyError }
                                                helperText={props.error.companyError  ? "Incorrect entry." : null}
                                                name='company'
                                                id="standard-basic"
                                                defaultValue={row.company}
                                                onChange={props.handelChange} />
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <TextField
                                                error={props.error.priceError}
                                                helperText={props.error.priceError ? "Incorrect entry." : null}
                                                name='price'
                                                id="standard-basic"
                                                defaultValue={row.price}
                                                onChange={props.handelChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <TextField
                                                error={props.error.priceError}
                                                helperText={props.error.priceError ? "Incorrect entry." : null}
                                                name='quantity'
                                                id="standard-basic"
                                                defaultValue={row.quantity}
                                                onChange={props.handelChange}
                                            />
                                        </StyledTableCell>
                                        {/* <StyledTableCell align="left">
                                            <TextField
                                                error={props.error.priceError}
                                                helperText={props.error.priceError ? "Incorrect entry." : null}
                                                name='category'
                                                id="standard-basic"
                                                defaultValue={row.category}
                                                onChange={props.handelChange}
                                            />
                                        </StyledTableCell> */}
                                        <StyledTableCell align="left">
                                            <TextField
                                                error={props.error.priceError}
                                                helperText={props.error.priceError ? "Incorrect entry." : null}
                                                name='description'
                                                id="standard-basic"
                                                defaultValue={row.description}
                                                onChange={props.handelChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <IconButton aria-label="delete" style={{ outline: 'none' }} >
                                                <DoneIcon onClick={() => props.isEdit(row, true)} />
                                            </IconButton >
                                            <IconButton aria-label="delete" style={{ outline: 'none' }} >
                                                <CloseIcon onClick={() => props.isEdit(row, false)} />
                                            </IconButton >
                                        </StyledTableCell>
                                    </>
                                    :
                                    <>
                                        <StyledTableCell component="th" scope="row">
                                           <img src={row.productImage} alt='n'/>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.productName}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.description}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.price}
                                            
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.quntity}
                                            <br/>
                                            {row.email}
                                        </StyledTableCell>
                                        
                                        <StyledTableCell align="right">
                                            <IconButton aria-label="delete" style={{ outline: 'none' }} >
                                                <EditIcon onClick={() => props.editOption(row,props.data)} />
                                            </IconButton >
                                            <IconButton aria-label="delete" style={{ outline: 'none' }} >
                                                <DeleteOutlineIcon onClick={() => props.delete(row)} />
                                            </IconButton >
                                        </StyledTableCell>
                                    </>
                                }


                            </StyledTableRow>
                        ))}

                </TableBody>
            </Table>
            {/* <CustomizedSnackbars message={props.open.message} open={props.open.open} status='error' /> */}

        </TableContainer>
    );
}