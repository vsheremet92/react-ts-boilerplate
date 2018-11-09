import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { appReducer } from '../reducers';

export const history = createBrowserHistory();
const routingMiddleware = routerMiddleware(history);

const mainReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  app: appReducer,
});

export default createStore(
  mainReducer(history),
  composeWithDevTools(applyMiddleware(routingMiddleware)),
);
