import { FETCH_PHOTOS } from "../../Actions";
import {unsplash} from '../../../api/Unsplash';
import {toJson} from "unsplash-js";

export const fetchPhotos = () => dispatch => {
    unsplash.search.photos("travel", 100, 20)
        .then(toJson)
        .then((data) => {
            dispatch({
                type: FETCH_PHOTOS,
                payload: data
            });
        });
}

export const searchPhotos = dispatch => ({
    onKeyPress: (event) => {
        if(event.key === 'Enter'){
            event.preventDefault();
            const keyword = event.target.value;
            unsplash.search.photos(keyword, 100, 20)
            .then(toJson)
            .then((data) => {
                dispatch({
                    type: FETCH_PHOTOS,
                    payload: data
                });
            });
        }
    }
});