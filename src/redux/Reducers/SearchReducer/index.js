import { FETCH_PHOTOS } from '../../Actions';

const initialState = {
    search: false
}

export default function(state = initialState, action) {
    console.log('search reducer');
    switch (action.type) {
        case FETCH_PHOTOS:
            return {
                search: true
            }
        default:
            return state;
    }
}