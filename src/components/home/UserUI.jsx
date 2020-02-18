import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IconButton, Badge } from '@material-ui/core';
import BadgeAvatars from './BadgeAvatars';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';



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
                <TableHead >
                    <TableRow >

                        <StyledTableCell>profile</StyledTableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="left">Email</StyledTableCell>
                        <StyledTableCell align="left">Mobile</StyledTableCell>
                        <StyledTableCell align="right">Custmers</StyledTableCell>
                        <StyledTableCell align="right">Partners</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {
                        props.data.map(row => (
                            <StyledTableRow hover key={row.id}>
                                <StyledTableCell align="left"><BadgeAvatars /></StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                <StyledTableCell align="left">{row.mobile}</StyledTableCell>
                                <StyledTableCell align="right">

                                    <IconButton aria-label="delete" style={{ outline: 'none' }} >
                                    <Badge badgeContent={row.customer.length} color="secondary">
                                            <SupervisorAccountIcon onClick={()=>props.viewCustomer(row)} />

                                        </Badge>
                                    </IconButton >
                                </StyledTableCell>
                                <StyledTableCell align="right">


                                    <IconButton aria-label="delete" style={{ outline: 'none' }} >
                                        <Badge badgeContent={row.partner.length} color="primary">
                                            <SupervisorAccountIcon onClick={()=>props.viewPartner(row)} />

                                        </Badge>

                                    </IconButton >
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}