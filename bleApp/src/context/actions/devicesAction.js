export default (payload, type) => dispatch => {
    if(type === 'DEVICES' || type === 'DISCONNECT'){
        dispatch({
            type,
            payload
        })
    }else if(type === 'CLEAR'){
        dispatch({type})
    }
    
}