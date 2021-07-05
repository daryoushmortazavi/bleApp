export default (payload, type) => dispatch => {
    if(type === 'DEVICES' || type === 'ADD'){
        dispatch({
            type,
            payload
        })
    }else if(type === 'CLEAR'){
        dispatch({type})
    }else if(type === 'SCANNING'){
        dispatch({type, payload})
    }
    
}