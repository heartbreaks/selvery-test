import {useToolbarStyles} from "./ThemeStyles";
import React from "react";
import {Toolbar, Typography} from "@material-ui/core";
import {connect} from "react-redux";

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