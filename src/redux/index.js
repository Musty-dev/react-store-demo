/* Fichero redux/index.js */
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

 
// STORE - El estado global de la aplicación.
let store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()        
  )
);
 
sagaMiddleware.run(rootSaga);


export default store;