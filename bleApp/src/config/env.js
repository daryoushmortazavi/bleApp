import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

// let DEV_BACKEND_URL='http://127.0.0.1:4000/ble/',
// PROD_BACKEND_URL='http://127.0.0.1:4000/ble/';

const devEnvironmentVariables = {
  BACKEND_URL: DEV_BACKEND_URL,
};

const prodEnvironmentVariables = {
  BACKEND_URL: PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
