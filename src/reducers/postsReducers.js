import { UPDATE, LOADING, ERROR } from '../types/postsType'

const INITIAL_STATE ={
    posts:  [],
    loading: false,
    error: ''
};


export default (state = INITIAL_STATE, action) => {
    switch ( action.type)  {
        case UPDATE:
            return{
                ...state,
                posts : action.payload,
                loading: false,
                error: ''
             };

        case LOADING:
            return{ ...state, loading: true }

        case ERROR:
            return{ ...state, error: true, loading: false }
    
        default:
            return state;
    }
}