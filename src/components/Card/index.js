import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import '../../styles/_card.scss';
import ImageZoom from '../common/Zoom';

class ImageCard extends Component {

    constructor(props) {
        super(props);
        this.state = { modalShow: false };
    }

    render() {

        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div>
                <Card className='card-zoom' style={{padding:'5px',border:'0'}} onClick={() => this.setState({ modalShow: true })}>
                    <Card.Img variant="top" src={this.props.photo.urls.regular} />
                    <div className="card-img-overlay">
                        <div className="row">
                            <div className="col-md-12">
                                {/*<button className="btn btn-sm btn-card">*/}
                                {/*<i className="fas fa-heart red"></i> {props.likes}*/}
                                {/*</button>*/}
                            </div>
                        </div>
                        <div className="row"
                             style={{bottom:'20px',position:'absolute',right:'35px'}}>
                            <a download={'image.jpg'} href={this.props.photo.download} style={{right:'10px'}} className="btn btn-sm btn-card float-right" title="download photo">
                                <i className="fas fa-arrow-down"></i>
                            </a>
                        </div>
                    </div>
                </Card>
                <ImageZoom
                    photo={this.props.photo}
                    show={this.state.modalShow}
                    onHide={modalClose}
                />
            </div>
        );
    }
}

export default  ImageCard;