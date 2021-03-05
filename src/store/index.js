import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import weatherReducer from './weather/reducers';
import authReducer from './auth/reducers';
import testemunhosReducer from './testemunhos/reducers';
import todosReducer from './toDoList/reducers';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  router: connectRouter(history),
  weather: weatherReducer,
  auth: authReducer,
  todo: todosReducer,
  testemunhos: testemunhosReducer,
});

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
let persistor = persistStore(store);
export { store, persistor };
