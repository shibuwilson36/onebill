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
    TableContainer: {
        boxShadow: '0 0 20px'
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
                            <h4>DETAILS</h4>
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


                        <StyledTableCell align="left"> Name</StyledTableCell>
                        <StyledTableCell align="left"> Email</StyledTableCell>
                        <StyledTableCell align="left">dateofBirth</StyledTableCell>
                        <StyledTableCell align="left">Mobile</StyledTableCell>
                        <StyledTableCell align="left">Address</StyledTableCell>

                        <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.add ?
                        <>

                            <StyledTableCell align="left">
                                <TextField
                                    error={props.error.nameError}
                                    helperText={props.error.nameError ? "Incorrect entry." : null}
                                    name='name'
                                    id="standard-basic"
                                    onChange={props.handelChange}
                                />
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <TextField
                                    error={props.error.emailError}
                                    helperText={props.error.emailError ? "Incorrect entry." : null}
                                    name='email'
                                    id="standard-basic"
                                    onChange={props.handelChange}
                                />
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <TextField
                                    error={props.error.dateOfBirthError}
                                    helperText={props.error.dateOfBirthError ? "Incorrect entry." : null}
                                    name='dateOfBirth'
                                    id="standard-basic"
                                    onChange={props.handelChange}
                                />
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <TextField
                                    error={props.error.mobileError}
                                    helperText={props.error.mobileError ? "Incorrect entry." : null}
                                    name='mobile'
                                    id="standard-basic"
                                    onChange={props.handelChange}
                                />
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <tr>
                                    <td>houseName</td>

                                    <TextField
                                        error={props.error.priceError}
                                        helperText={props.error.priceError ? "Incorrect entry." : null}
                                        name='houseName'
                                        id="standard-basic"
                                        onChange={props.handelChange}
                                    />

                                </tr>
                                <tr>
                                    <td>state</td>

                                    <TextField
                                        error={props.error.priceError}
                                        helperText={props.error.priceError ? "Incorrect entry." : null}
                                        name='state'
                                        id="standard-basic"
                                        onChange={props.handelChange}
                                    />

                                </tr>
                                <tr>
                                    <td>city</td>

                                    <TextField
                                        error={props.error.priceError}
                                        helperText={props.error.priceError ? "Incorrect entry." : null}
                                        name='city'
                                        id="standard-basic"
                                        onChange={props.handelChange}
                                    />

                                </tr>
                                <tr>
                                    <td>country</td>

                                    <TextField
                                        error={props.error.priceError}
                                        helperText={props.error.priceError ? "Incorrect entry." : null}
                                        name='country'
                                        id="standard-basic"
                                        onChange={props.handelChange}
                                    />

                                </tr>
                                <tr>
                                    <td>pin</td>

                                    <TextField
                                        error={props.error.priceError}
                                        helperText={props.error.priceError ? "Incorrect entry." : null}
                                        name='pin'
                                        id="standard-basic"
                                        onChange={props.handelChange}
                                    />

                                </tr>

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

                                        <StyledTableCell align="left">
                                            <TextField
                                                error={props.error.nameError}
                                                helperText={props.error.nameError ? "Incorrect entry." : null}
                                                name='name'
                                                id="standard-basic"
                                                defaultValue={row.name}
                                                onChange={props.handelChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <TextField
                                                error={props.error.emailError}
                                                helperText={props.error.emailError ? "Incorrect entry." : null}
                                                name='email'
                                                id="standard-basic"
                                                defaultValue={row.email}
                                                onChange={props.handelChange} />
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <TextField
                                                error={props.error.dateOfBirthError}
                                                helperText={props.error.dateOfBirthError ? "Incorrect entry." : null}
                                                name='dateOfBirth'
                                                id="standard-basic"
                                                defaultValue={row.dateOfBirth}
                                                onChange={props.handelChange} />
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <TextField
                                                error={props.error.mobileError}
                                                helperText={props.error.mobileError ? "Incorrect entry." : null}
                                                name='mobile'
                                                id="standard-basic"
                                                defaultValue={row.mobile}
                                                
                                                onChange={props.handelChange}
                                            />
                                        </StyledTableCell>
                                       
                                        <StyledTableCell align="left">
                                            <tr>
                                                <td>houseName</td>

                                                <TextField
                                                    error={props.error.priceError}
                                                    helperText={props.error.priceError ? "Incorrect entry." : null}
                                                    name='houseName'
                                                    id="standard-basic"
                                                    onChange={props.handelChange}
                                                    defaultValue={row.address.houseName}
                                                />

                                            </tr>
                                            <tr>
                                                <td>state</td>

                                                <TextField
                                                    error={props.error.priceError}
                                                    helperText={props.error.priceError ? "Incorrect entry." : null}
                                                    name='state'
                                                    id="standard-basic"
                                                    defaultValue={row.address.state}
                                                    onChange={props.handelChange}
                                                />

                                            </tr>
                                            <tr>
                                                <td>city</td>

                                                <TextField
                                                    error={props.error.priceError}
                                                    helperText={props.error.priceError ? "Incorrect entry." : null}
                                                    name='city'
                                                    id="standard-basic"
                                                    defaultValue={row.address.city}
                                                    onChange={props.handelChange}
                                                />

                                            </tr>
                                            <tr>
                                                <td>country</td>

                                                <TextField
                                                    error={props.error.priceError}
                                                    helperText={props.error.priceError ? "Incorrect entry." : null}
                                                    name='country'
                                                    id="standard-basic"
                                                    defaultValue={row.address.country}
                                                    onChange={props.handelChange}
                                                />

                                            </tr>
                                            <tr>
                                                <td>pin</td>

                                                <TextField
                                                    error={props.error.priceError}
                                                    helperText={props.error.priceError ? "Incorrect entry." : null}
                                                    name='pin'
                                                    id="standard-basic"
                                                    onChange={props.handelChange}
                                                    defaultValue={row.address.pin}
                                                />

                                            </tr>
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

                                        <StyledTableCell align="left">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.email}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.dateOfBirth}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.mobile}

                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <tr>
                                                <td>houseName</td>
                                                <td>:{row.address.houseName}</td>
                                            </tr>
                                            <tr>
                                                <td>state</td>
                                                <td>:{row.address.state}</td>
                                            </tr>
                                            <tr>
                                                <td>city</td>
                                                <td>:{row.address.city}</td>
                                            </tr>
                                            <tr>
                                                <td>country</td>
                                                <td>:{row.address.country}</td>
                                            </tr>
                                            <tr>
                                                <td>pin</td>
                                                <td>:{row.address.pin}</td>
                                            </tr>

                                        </StyledTableCell>

                                        <StyledTableCell align="right">
                                            <IconButton aria-label="delete" style={{ outline: 'none' }} >
                                                <EditIcon onClick={() => props.editOption(row, props.data)} />
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