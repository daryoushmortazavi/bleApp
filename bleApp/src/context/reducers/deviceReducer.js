const deviceReducer = (state, {type, payload}) => {

    switch(type){
        case 'DEVICES':
            const {id} = payload;
            if(!state.devices.length || (state.devices.length && !state.devices.find(dev => dev.id === id))){
                state.devices.push(payload);
            }
            return {...state};

        case 'CLEAR':
            state.devices = [];
            return {...state};

        case 'DISCONNECT':
            state.devices = state.devices.filter(dev => dev.id !== payload.id)
            // state.devices.forEach(device => {
            //     if(device.id === payload.id){
                    
            //         delete device;
            //     }
            // });
            console.log('came ', state);
            
            return {...state};

        default:
            return state;
    }
};

export default deviceReducer;