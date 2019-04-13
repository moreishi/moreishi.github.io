import { FETCH_PHOTOS } from '../../Actions';

const initialState = {
    items: [],
    item: {},
    search: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_PHOTOS:
            return {
                ...state,
                items: action.payload,
                search: true
            }
        default:
            return state;
    }
}