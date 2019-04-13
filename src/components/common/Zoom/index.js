import React, {Component} from 'react';
import {Card, Modal} from 'react-bootstrap';

class Zoom extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Body style={{padding:'10px'}}>
                    <Card>
                        <Card.Img variant="top" src={this.props.photo.urls.regular} />
                        <div className="card-img-overlay">
                            <h1></h1>
                        </div>
                    </Card>
                </Modal.Body>
            </Modal>
        );
    }
}

export default Zoom;