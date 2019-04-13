import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import Jumbotron from '../../components/Jumbotron';
import Board from '../../components/Board';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import Loader from 'react-loader-spinner';


class Home extends Component {
    render() {

        if(this.props.search === true) {
            return <Redirect to="/search" />

        }

        console.log(this.props);

        if(this.props.progress === true) {
            return (<div className="page-loader">
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height="100"
                            width="100"
                        />
                    </div>);
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
    search: state.photos.search,
    progress: false
});

export default connect(mapStateToProps)(Home);
