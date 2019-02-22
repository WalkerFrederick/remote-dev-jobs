import { FETCH_JOBS } from '../Actions/types';
import { bindActionCreators } from '../../../../Library/Caches/typescript/3.2/node_modules/redux';

const initialState = {
    items: 
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_JOBS:
            return {
                ...state,
                items: bindActionCreators.payload,
            }
        default:
            return state;
    }
}