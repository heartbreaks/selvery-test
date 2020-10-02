import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import {Toolbar, Typography} from "@material-ui/core";
import {connect} from "react-redux";

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    title: {
        flex: '1 1 100%',
    },
}));

function EnhancedTableToolbar(props){
    const classes = useToolbarStyles();
    return (
       <Toolbar>
           <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                 Участники
           </Typography>
       </Toolbar>
    );
}
export default connect(null)(EnhancedTableToolbar)