import React, { Component } from 'react';
import Navigation from "../Navigation";
import Board from '../../components/Board';

class Search extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Board />
            </div>
        );
    }
}

export default Search;
