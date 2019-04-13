import React from 'react';
import { connect } from 'react-redux';
import { searchPhotos } from '../../../redux/Actions/SearchAction';

const Search = (props) => {
    return (
        <form className="form-inline my-2 my-lg-0">
            <input onKeyPress={props.onKeyPress} style={{width:'600px'}} className="form-control mr-sm-2" type="search" placeholder="Search free high-resolution photos" aria-label="Search" />
        </form>
    );
}

const mapStateToProps = state => ({
    photos: state.photos.items
});

export default  connect(mapStateToProps,searchPhotos)(Search);