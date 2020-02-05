const INITIAL_STATE ={
    users:  []
};


export default (state = INITIAL_STATE, action) => {
    switch ( action.type)  {
        case 'get_user':
            return{ ...state, users : action.payload }
    
        default:
            return state;
    }
}