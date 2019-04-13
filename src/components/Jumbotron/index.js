import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Search from '../common/Search';

const JumbotronHead = (props) => {
    return (
            <Jumbotron fluid className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h1>Asplash</h1>
                            <p>
                                Beautiful, free photos. <br/>
                                Gifted by the world’s most generous community of photographers.
                            </p>
                            <Search />
                            <p className="mt-2"> <small><strong>Trending searches</strong>: flower, wallpaper, background, sad, love</small></p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
    );
}

export default  JumbotronHead;