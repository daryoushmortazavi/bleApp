export default (type, payload) => dispatch => {
    if(type === 'LOGOUT'){
        dispatch({
            type
        })
    }else if(type === 'LOGIN_SUCCESS'){
        dispatch({
            type,
            payload
        })
    }
}