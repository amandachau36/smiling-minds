import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import ResetRating from "./ResetRating";
import Journal from "./Journal";
import Thanks from "./Thanks";


class Home extends Component {


    render() {
        return (
            <div className="App">
                <h3 style={{textAlign: "left", paddingBottom: "0.3rem"}}>Let's chat! How are you feeling today?</h3>
                <ResetRating question={"I've been feeling relaxed"} />
                <ResetRating question={"I've been feeling distracted"} />
                <br/>
                <Journal/>
            </div>
        );
    }
}

export default Home;