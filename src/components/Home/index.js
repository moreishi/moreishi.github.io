import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import Jumbotron from '../../components/Jumbotron';
import Board from '../../components/Board';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";


class Home extends Component {
    render() {

        if(this.props.search === true) {
            return <Redirect to="/search" />
        }

        return (
            <div>
                <Navigation />
                <Jumbotron />
                <Board />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    search: state.photos.search
});

export default connect(mapStateToProps)(Home);
