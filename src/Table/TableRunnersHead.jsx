import {TableCell, TableHead, TableRow, TableSortLabel} from "@material-ui/core";
import React from "react";
import {connect} from "react-redux";

function TableRunnersHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    const headCells = [
        { id: 'date', numeric: false, disablePadding: false, label: 'Birthday' },
        { id: 'regDate', numeric: false, disablePadding: false, label: 'Registered' },
        { id: 'payment', numeric: true, disablePadding: false, label: 'Payment' },
        { id: 'distance', numeric: true, disablePadding: false, label: 'Distance' },
    ];
    return (
        <TableHead>
            <TableRow>
                <TableCell align="center" padding='default'>Name</TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="center"
                        padding='default'
                        sortDirection={orderBy === headCell.id ? order : false}>
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}>
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
export default connect(null)(TableRunnersHead)