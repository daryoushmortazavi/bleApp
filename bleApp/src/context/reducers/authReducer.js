const authReducer = (state, {type, payload}) => {

    switch(type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true
            };

        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false
            }

        default:
            return state;
    }
};

export default authReducer;