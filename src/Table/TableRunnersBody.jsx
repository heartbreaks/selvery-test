import React from "react";
import {connect} from "react-redux";
import {TableBody, TableCell, TableRow} from '@material-ui/core';

function TableRunnersBody(props) {
    const {order, orderBy, stableSort, getComparator, listUsers, rowsPerPage, page} = props
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, listUsers.length - page * rowsPerPage);
    return (
        <TableBody>
            {stableSort(listUsers, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                    return (
                        <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.id}>
                            <TableCell component="th" align="center" scope="row" padding="none">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.regDate}</TableCell>
                            <TableCell align="center">${row.payment}</TableCell>
                            <TableCell align="center">{row.distance} км</TableCell>
                        </TableRow>
                    );
                })}
            {emptyRows > 0 && (
                <TableRow style={{ height: ( 33 ) * emptyRows }}>
                    <TableCell colSpan={6} />
                </TableRow>
            )}
        </TableBody>
    )
}

function mapStateToProps(state){
    return {
        listUsers: state.users
    }
}
export default connect(mapStateToProps)(TableRunnersBody)