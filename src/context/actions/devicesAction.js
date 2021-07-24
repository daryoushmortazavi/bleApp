export default (payload, type) => dispatch => {
    if(type === 'DEVICES' || type === 'ADD' || type === 'REMOVE' || type === 'REMOVE_DEVICE'){5
        dispatch({
            type,
            payload
        })
    }else if(type === 'CLEAR'){
        dispatch({type})
    }else if(type === 'SCANNING' || type === 'SET_COORDS'){
        dispatch({type, payload})
    }
    
}