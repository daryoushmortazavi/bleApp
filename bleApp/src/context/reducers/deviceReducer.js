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

        case 'ADD':
            // state.devices = state.devices.filter(dev => dev.id !== payload.id)
            // state.devices.forEach(device => {
            //     if(device.id === payload.id){
                    
            //         delete device;
            //     }
            // });
            
            return {...state};

        case 'SCANNING':
            state.isScanning = payload;
            return state;

        default:
            return state;
    }
};

export default deviceReducer;