import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "@redux/rootReducer";
import { rootSaga } from "@redux/rootSaga";
import { routerMiddleware } from 'connected-react-router';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
];

// const store = createStore(rootReducer(history), applyMiddleware(...middleware, logger)); // with Redux Logger in console
const store = createStore(rootReducer(history), applyMiddleware(...middleware));

const rootStateInitType = rootReducer(history);

export type RootState = ReturnType<typeof rootStateInitType>;

sagaMiddleware.run(rootSaga);

export default store;
