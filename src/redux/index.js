import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fixtureReducer from './reducers/fixtureReducer';

const rootReducer = combineReducers({
  fixture: fixtureReducer,
});
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
};

export default configureStore;
