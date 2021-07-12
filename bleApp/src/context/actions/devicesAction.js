export default (payload, type) => dispatch => {
    if(type === 'DEVICES' || type === 'ADD' || type === 'REMOVE'){5
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