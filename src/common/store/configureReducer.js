import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducer/reducer';

const rootReducer = combineReducers({
  contact: reducers,
});

const configureReducer = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureReducer;
