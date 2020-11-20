// Root Reducers
import reducer from "./index.reducer";
// Sagas
import sagas from "./index.sagas";
// Redux
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';


 const sagaMiddleware = createSagaMiddleware();
// Create store and also apply  redux-saga in this project
const appStore = createStore(reducer,applyMiddleware(sagaMiddleware));
// Run reudx-saga middleware and apply all forked sagas that we have created
sagaMiddleware.run(sagas);

export default appStore;