import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import 'font-awesome/css/font-awesome.min.css';
import './App.css';



class Thanks extends Component {

    render() {
        return (
            <div style={{padding: "2rem"}}>
                <h3 style={{textAlign: "left", paddingBottom: "0.3rem", color: "#581669"}}>Thank you for checking in Vanessa!</h3>
                <h5 style={{textAlign: "left", paddingBottom: "0.3rem", color: "#581669"}}>You are positively contributing to your wellbeing.</h5>
            </div>
        );
    }
}

export default Thanks;