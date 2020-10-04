import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { addNewPerticipiant } from './redux/actions'
import {Col, Row} from "react-bootstrap";
import {TextField, Button, Select, MenuItem, InputAdornment, Input} from '@material-ui/core'
import {TextMaskCustom} from './Table/TextMaskCustom'

function FormRunners(props){
    const [values, setValues] = React.useState({
        id: '', name: '', date: '2017-05-24', email: '',
        phone: '+7', distance: '', payment: ''
    })
    const [changed, setChange] = React.useState({
        name: false, email: false, phone: false,
        distance: false, payment: false
    })
    let {name, email, phone, distance, payment} = changed

    const changeInputHandler = (prop) => (event) => {
        event.persist()
        setValues({ ...values, [prop]: event.target.value, id: Date.now(),
            regDate: new Date().toLocaleTimeString('ru-ru',{year: '2-digit',month: '2-digit',day: '2-digit'})});
        setChange({...changed, [prop]: true})
        if (prop === 'email'){
            let isEmail = event.target.value.search(new RegExp('^\\S+@\\S+$', 'i'))
            setChange({...changed, email: isEmail === 0 ? true : false})
        }
    };
    const addNewParticipant = (event) => {
        event.preventDefault()
        props.addNewPerticipiant(values)
        setValues({ ...values, name: '', date: '2017-05-24', email: '', phone: '+7', distance: '', payment: 0});
        setChange({...changed, name: false, email: false, phone: false, distance: false, payment: false, emailError: false})
    };

    const isFilled = name && email && phone && distance && payment

    return (
        <Col>
            <form onSubmit={addNewParticipant}>
                <Row>
                    <Col md={3} className='d-flex justify-content-sm-center mt-sm-3'>
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
                                   label="Дата рождения"
                                   type="date"
                                   value={values.date}/>
                    </Col>
                    <Col md={2}  className='d-flex justify-content-sm-center mt-sm-3'>
                        <TextField name='email'
                                   onChange={changeInputHandler('email')}
                                   id="standard-basic"
                                   value={values.email}
                                   label="E-mail"
                                   {...{error: !changed.email}}/>
                    </Col>
                    <Col md={2}  className='d-flex justify-content-sm-center mt-sm-3'>
                        <Input name='phone'
                               onChange={changeInputHandler('phone')}
                               id="standard-basic"
                               type="phone"
                               value={values.phone}
                               label="Phone"
                               inputComponent={TextMaskCustom} />
                    </Col>
                    <Col md={1} className='d-flex justify-content-sm-center mt-sm-3'>
                        <Select value={values.distance}
                                onChange={changeInputHandler('distance')}
                                displayEmpty
                                name="distance"
                                inputProps={{ 'aria-label': 'Without label' }}>
                                <MenuItem value=""><em>Дистанция</em></MenuItem>
                                <MenuItem value={3}>3 км</MenuItem>
                                <MenuItem value={5}>5 км</MenuItem>
                                <MenuItem value={10}>10 км</MenuItem>
                        </Select>
                    </Col>
                    <Col md={2} className='d-flex justify-content-sm-center mt-sm-3'>
                        <Input
                            id="standard-adornment-amount"
                            onChange={changeInputHandler('payment')}
                            name="payment"
                            placeholder='0'
                            value={values.payment}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </Col>
                    <Col md={12} className="justify-content-end mt-sm-4">
                        <Button variant="contained" type="submit" color="secondary" className={!isFilled ? 'Mui-disabled Mui-disabled' : ''} >
                            Отправить
                        </Button>
                    </Col>
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