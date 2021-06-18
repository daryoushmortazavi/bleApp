import React, {createContext, useReducer} from 'react';
import authInitState from './initialStates/authInitState';
import authReducer from './reducers/authReducer';
import deviceReducer from './reducers/deviceReducer';
import deviceInitState from './initialStates/deviceInitState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitState);
    const [deviceState, deviceDispatch] = useReducer(deviceReducer, deviceInitState);
    return (<GlobalContext.Provider value={{authState, deviceState, authDispatch, deviceDispatch}}>{children}</GlobalContext.Provider>);
}

export default GlobalProvider;