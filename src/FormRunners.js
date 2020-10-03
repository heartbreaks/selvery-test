import React from 'react'
import {connect} from "react-redux";
import {Col, Row} from "react-bootstrap";
import {TextField, Button, Select, MenuItem, InputAdornment} from '@material-ui/core'
import Input from "@material-ui/core/Input";
import { addNewPerticipiant } from './redux/actions'
import {bindActionCreators} from "redux";

function FormRunners(props){

    const [values, setValues] = React.useState({
        name: '', date: '2017-05-24',
        email: '', phone: '',
        distance: '', payment: 0
    })

    const changeInputHandler = (prop) => (event) => {
        event.persist()
        setValues({ ...values, [prop]: event.target.value,  regDate: new Date()
                    .toLocaleTimeString('ru-ru',{year: '2-digit',month: '2-digit',day: '2-digit'})});
    };

    const addNewParticipant = (event) => {
        event.preventDefault()
        props.addNewPerticipiant(values)
        setValues({ ...values, name: '', date: '2017-05-24', email: '', phone: '', distance: '', payment: 0});
    };

    return (
        <Col>
            <form onSubmit={addNewParticipant}>
                <Row>
                    <Col md={2} className='d-flex justify-content-sm-center mt-sm-3'>
                        <TextField name='name'
                                   id="standard-basic"
                                   onChange={changeInputHandler('name')}
                                   value={values.name}
                                   label="ФИО" />
                    </Col>
                    <Col md={2} className='d-flex justify-content-sm-center mt-sm-3'>
                        <TextField name='date'
                                   id="date"
                                   onChange={changeInputHandler('date')}
                                   label="Birthday"
                                   type="date"
                                   value={values.date}/>
                    </Col>
                    <Col md={2}  className='d-flex justify-content-sm-center mt-sm-3'>
                        <TextField name='email'
                                   onChange={changeInputHandler('email')}
                                   id="standard-basic"
                                   type="email"
                                   value={values.email}
                                   label="E-mail" />
                    </Col>
                    <Col md={2}  className='d-flex justify-content-sm-center mt-sm-3'>
                        <TextField name='phone'
                                   onChange={changeInputHandler('phone')}
                                   id="standard-basic"
                                   type="phone"
                                   value={values.phone}
                                   label="Phone" />
                    </Col>
                    <Col md={1} className='d-flex justify-content-sm-center mt-sm-3'>
                        <Select
                            value={values.distance}
                            onChange={changeInputHandler('distance')}
                            displayEmpty
                            name="distance"
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>Distance</em>
                            </MenuItem>
                            <MenuItem value={3}>3 km</MenuItem>
                            <MenuItem value={5}>5 km</MenuItem>
                                <MenuItem value={10}>10 km</MenuItem>
                        </Select>
                    </Col>
                    <Col md={2} className='d-flex justify-content-sm-center mt-sm-3'>
                        <Input
                            id="standard-adornment-amount"
                            onChange={changeInputHandler('payment')}
                            name="payment"
                            value={values.payment}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </Col>
                    <Button variant="contained" type="submit" color="secondary" className='d-flex justify-content-sm-center mt-sm-3'>
                        Submit
                    </Button>
                </Row>
            </form>
        </Col>
    )
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addNewPerticipiant
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(FormRunners)