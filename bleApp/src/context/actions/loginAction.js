export default (type) => dispatch => {
    if(type === 'LOGOUT'){
        dispatch({
            type
        })
    }else{
        dispatch({
            type: 'LOGIN_SUCCESS'
        })
    }
    
}