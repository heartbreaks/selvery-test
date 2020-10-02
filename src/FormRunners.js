import React, {Component} from 'react'
import {connect} from "react-redux";
import {Col, Row} from "react-bootstrap";
import {TextField, Button, Select, MenuItem} from '@material-ui/core'

class FormRunners extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Col>
                <form>
                    <Row>
                        <Col md={2} className='d-flex justify-content-sm-center mt-sm-3'>
                            <TextField id="standard-basic" onChange={this.hand} label="ФИО" />
                        </Col>
                        <Col md={2} className='d-flex justify-content-sm-center mt-sm-3'>
                            <TextField id="date" label="Birthday" type="date" defaultValue="2017-05-24"/>
                        </Col>
                        <Col md={2} className='d-flex justify-content-sm-center mt-sm-3'>
                            <TextField id="standard-basic" type="email" label="E-mail" />
                        </Col>
                        <Col md={2} className='d-flex justify-content-sm-center mt-sm-3'>
                            <TextField id="standard-basic" type="phone" label="Phone" />
                        </Col>
                        <Col md={1} className='d-flex justify-content-sm-center mt-sm-3'>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={''}>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Col>
                        <Col md={2} className='d-flex justify-content-sm-center mt-sm-3'>
                            <TextField id="standard-basic" label="Сумма взноса" />
                        </Col>
                        <Button variant="contained" type="submit" color="secondary"
                                className='d-flex justify-content-sm-center mt-sm-3'>
                            Submit
                        </Button>
                    </Row>
                </form>
            </Col>
        )
    }
}

export default connect(null)(FormRunners)