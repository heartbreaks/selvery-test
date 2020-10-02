import React, {Component} from 'react'
import {connect} from "react-redux";
import {Col, Row} from "react-bootstrap";
import {TextField, Button, Select, MenuItem} from '@material-ui/core'

class FormRunners extends Component{
    constructor(props) {
        super(props);
        this.state = {}
        this.changeInputHandler = this.changeInputHandler.bind(this)
        this.addNewParticipant = this.addNewParticipant.bind(this)
    }

    changeInputHandler(event) {
        event.persist()
        this.setState(participiantInfo => ({...participiantInfo, ...{
            [event.target.name]: event.target.value
            }}))
    }

    addNewParticipant = (event) => {
        event.preventDefault()
        console.log('State', {...this.state, regDate: new Date()
                .toLocaleTimeString('ru-ru',{year: '2-digit',month: '2-digit',day: '2-digit'})})
    }

    render() {
        return (
            <Col>
                <form onSubmit={this.addNewParticipant}>
                    <Row>
                        <Col md={2} className='d-flex justify-content-sm-center mt-sm-3'>
                            <TextField name='name' id="standard-basic" onChange={this.changeInputHandler} label="ФИО" />
                        </Col>
                        <Col md={2} className='d-flex justify-content-sm-center mt-sm-3'>
                            <TextField name='date' id="date" onChange={this.changeInputHandler} label="Birthday" type="date" defaultValue="2017-05-24"/>
                        </Col>
                        <Col md={2} onChange={this.changeInputHandler} className='d-flex justify-content-sm-center mt-sm-3'>
                            <TextField name='email'  id="standard-basic" type="email" label="E-mail" />
                        </Col>
                        <Col md={2} onChange={this.changeInputHandler} className='d-flex justify-content-sm-center mt-sm-3'>
                            <TextField name='phone' id="standard-basic" type="phone" label="Phone" />
                        </Col>
                        <Col md={1} onChange={this.changeInputHandler} className='d-flex justify-content-sm-center mt-sm-3'>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='distance'
                                onChange={this.changeInputHandler}
                                value={''}>
                                <MenuItem value={3}>3 km</MenuItem>
                                <MenuItem value={5}>5 km</MenuItem>
                                <MenuItem value={10}>10 km</MenuItem>
                            </Select>
                        </Col>
                        <Col md={2} onChange={this.changeInputHandler} className='d-flex justify-content-sm-center mt-sm-3'>
                            <TextField name='payment'  id="standard-basic" label="Сумма взноса" />
                        </Col>
                        <Button variant="contained" type="submit" color="secondary"className='d-flex justify-content-sm-center mt-sm-3'>
                            Submit
                        </Button>
                    </Row>
                </form>
            </Col>
        )
    }
}

export default connect(null)(FormRunners)