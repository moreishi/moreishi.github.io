import React, { Component } from 'react';
import Navigation from "../Navigation";
import Board from '../../components/Board';
// import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

class Search extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="row">
                    <div className="container mt-5 mb-3">
                        <h1>Collections</h1>
                        <p>Explore the world through collections of beautiful photos free to use.</p>
                    </div>
                </div>
                <Board />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    search: state.photos.search,
    progress: false
});

export default connect(mapStateToProps,null)(Search);
