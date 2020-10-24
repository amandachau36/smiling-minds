import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Rating from 'react-rating';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSmileBeam, faSmile, faFrown, faSadTear, faMeh } from '@fortawesome/free-solid-svg-icons';
import { faSmileBeam as faSmileBeamRegular, faSmile as faSmileRegular, faMeh as faMehRegular, faFrown as faFrownRegular, faSadTear as faSadTearRegular} from '@fortawesome/free-regular-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


library.add(faSmile, faSmileBeam, faFrown, faSadTear, faMeh, faSmileBeamRegular, faSmileRegular, faFrownRegular, faMehRegular, faSadTearRegular);

class ResetRating extends Component {
  
    render() {
      return (
        <div>
          {<Rating
            emptySymbol={[<FontAwesomeIcon icon={['far','sad-tear']}/>, <FontAwesomeIcon icon={['far','frown']}/>, <FontAwesomeIcon icon={['far','meh']}/>, <FontAwesomeIcon icon={['far','smile']}/>, <FontAwesomeIcon icon={['far','smile-beam']}/> ]}
            fullSymbol={[<FontAwesomeIcon icon="sad-tear"/>, <FontAwesomeIcon icon="frown"/>, <FontAwesomeIcon icon="meh"/>, <FontAwesomeIcon icon="smile"/>, <FontAwesomeIcon icon="smile-beam"/> ]}
        />}
        </div>
      );
    }
}
  

  




export default ResetRating;

// <Rating
//   emptySymbol={['fa fa-star-o fa-2x', 'fa fa-heart-o fa-2x']}
//   fullSymbol={['fa fa-star fa-2x', 'fa fa-heart fa-2x']}
// />