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
                            key={row.name}
                        >
                            <TableCell component="th" scope="row" padding="none">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.regDate}</TableCell>
                            <TableCell align="left">{row.payment}</TableCell>
                            <TableCell align="left">{row.distance}</TableCell>
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