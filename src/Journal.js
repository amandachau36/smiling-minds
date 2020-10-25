import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import history from './History';

library.add(faCalendarAlt, faClock, faMicrophone, faAngleDown, faUserCircle);

class Journal extends Component {


    newPage = () => {
        history.push('/thanks');
        window.location.reload();
    }

    render() {
        return (
            <div className='container'>
                <div>
                    <div className='float-left'>
                        <FontAwesomeIcon icon={['far', 'user-circle']} size="3x" style={{marginRight: "0.3rem"}}/>
                    </div>
                    <div>
                        <h5 style={{textAlign: "left"}}> Take a moment to express your thoughts and feelings</h5>
                    </div>
                </div>
                <br/>
                <Form.Group>
                    <div className='float-left'>
                        <p><FontAwesomeIcon icon={['far', 'calendar-alt']} /> Sunday, 25 October <FontAwesomeIcon icon={['fas', 'angle-down']} /></p>
                    </div>
                    <div className='float-right'>
                        <p><FontAwesomeIcon icon={['far', 'clock']} /> 14:00 <FontAwesomeIcon icon={['fas', 'angle-down']} /></p>
                    </div>
                    <Form.Control as="textarea" rows={5} />
                    <br/>
                    <FontAwesomeIcon className='float-right' id='microphone' icon={['fas', 'microphone']} size="2x" />
                    <br />
                </Form.Group>               
                <Button block variant="primary" style={{backgroundColor: "#581669"}} onClick={this.newPage} >Finish Checking-In</Button >{' '}
            </div>
        );
    }
}



export default Journal;
