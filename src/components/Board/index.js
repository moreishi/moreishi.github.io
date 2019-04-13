import React, { Component } from 'react';
import Card from '../Card';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../redux/Actions/PhotoActions';

class Board extends Component {

    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {

        let photoItems;

        if (typeof this.props.photos.results !== 'undefined') {
            const items = this.props.photos.results;
            photoItems = items.map(photo => (
                <Card key={photo.id} photo={photo}></Card>
            ));
        }

        return (
            <div>
                <div className='container mb-md-5'>
                    <div className="card-columns">
                        {photoItems}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    photos: state.photos.items
});

export default  connect(mapStateToProps,{ fetchPhotos })(Board);