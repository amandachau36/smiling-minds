import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Rating from 'react-rating';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSmileBeam, faSmile, faFrown, faSadTear, faMeh } from '@fortawesome/free-solid-svg-icons';
import { faSmileBeam as faSmileBeamRegular, faSmile as faSmileRegular, faMeh as faMehRegular, faFrown as faFrownRegular, faSadTear as faSadTearRegular} from '@fortawesome/free-regular-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './App.css';


library.add(faSmile, faSmileBeam, faFrown, faSadTear, faMeh, faSmileBeamRegular, faSmileRegular, faFrownRegular, faMehRegular, faSadTearRegular);

class ResetRating extends Component {
  
    render() {
      return (
        <div style={{paddingTop: "0.3rem"}}>
            <h5 style={{textAlign: "left"}}>{this.props.question}</h5>
            <div style={{backgroundColor: "#FDECE6", padding: "0.3rem"}}>
                {<Rating
                emptySymbol={[<FontAwesomeIcon icon={['far','sad-tear']} size="3x" style={{margin: "3px"}}/>, <FontAwesomeIcon icon={['far','frown']} size="3x" style={{margin: "3px"}}/>, <FontAwesomeIcon icon={['far','meh']} size="3x" style={{margin: "3px"}}/>, <FontAwesomeIcon icon={['far','smile']} size="3x" style={{margin: "3px"}}/>, <FontAwesomeIcon icon={['far','smile-beam']} size="3x" style={{margin: "3px"}}/> ]}
                fullSymbol={[<FontAwesomeIcon icon="sad-tear" size="3x" style={{margin: "3px"}}/>, <FontAwesomeIcon icon="frown" size="3x" style={{margin: "3px"}}/>, <FontAwesomeIcon icon="meh" size="3x" style={{margin: "3px"}}/>, <FontAwesomeIcon icon="smile" size="3x" style={{margin: "3px"}}/>, <FontAwesomeIcon icon="smile-beam" size="3x" style={{margin: "3px"}}/> ]}
                />}
            </div>
        </div>
      );
    }
}
  



export default ResetRating;

