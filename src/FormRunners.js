import React, {Component} from 'react'
import {connect} from "react-redux";

class FormRunners extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Введите данные нового участника</h1>
                
            </div>
        )
    }
}

export default connect(null)(FormRunners)