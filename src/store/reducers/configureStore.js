import rootReducer from './index';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, configureStore} from '@reduxjs/toolkit';

const configure = () => {
  return configureStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
};

export default configure;
