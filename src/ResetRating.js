import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Rating from 'react-rating';
import 'font-awesome/css/font-awesome.min.css';


class ResetRating extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      this.setState({value: undefined});
    }
  
    render() {
      return (
        <div>
          {<Rating // {...this.props} initialRating={this.state.value}
          stop={5}
          // can't seem to get the grin emoji to render?
            emptySymbol={['far fa-grin-beam fa-2x', 'fa fa-heart-o fa-2x']}
            fullSymbol={['fas fa-grin-beam fa-2x', 'fa fa-heart fa-2x']}
        />}
        {/* { <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
        /> } */}
          <button onClick={this.handleClick}>Just a button</button>
        </div>
      );
    }
}
  

  




export default ResetRating;

// <Rating
//   emptySymbol={['fa fa-star-o fa-2x', 'fa fa-heart-o fa-2x']}
//   fullSymbol={['fa fa-star fa-2x', 'fa fa-heart fa-2x']}
// />