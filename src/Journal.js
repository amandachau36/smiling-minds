import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Form from 'react-bootstrap/Form';

class Journal extends Component {
    render() {
        return (
            <div>
                <h1>Journal</h1>
                <Form.Group>
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </div>
        );
    }
}



export default Journal;
