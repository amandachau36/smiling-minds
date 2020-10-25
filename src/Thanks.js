import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
//import { faSmileBeam as faSmileBeamRegular, faSmile as faSmileRegular, faMeh as faMehRegular, faFrown as faFrownRegular, faSadTear as faSadTearRegular} from '@fortawesome/free-regular-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './App.css';
import Rating from "react-rating";


library.add(faHeart);

class Thanks extends Component {


    render() {
        return (
            <div style={{padding: "2rem"}} >
                <h3 style={{textAlign: "left", paddingBottom: "0.3rem", color: "#581669"}}>Thank you for checking in!</h3>
                <h5 style={{textAlign: "left", paddingBottom: "0.3rem", color: "#581669"}}>You are positively contributing to your wellbeing.</h5>

                <FontAwesomeIcon icon="heart" size="3x" color="#E85A4C" style={{margin: "3px", alignContent: "center"}}/>
            </div>
        );
    }
}

export default Thanks;