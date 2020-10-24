import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Form from 'react-bootstrap/Form';

class Journal extends Component {
    render() {
        return (
            <div>
                <h4>Take a moment to express your thoughts and feelings</h4>
                <Form.Group>
                    <Form.Label>maybe we can put a calendar here</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
            </div>
        );
    }
}



export default Journal;
