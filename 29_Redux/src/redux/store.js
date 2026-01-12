import { applyMiddleware, compose, createStore } from "redux";
import {rootReducer} from './reducers/index'
import { persistStore, persistReducer } from 'redux-persist'
import local from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'myStore',
  storage: local,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(), // iske andar koi bhi apna middleware likh skte h
        window.__REDUX_DEVTOOLS_EXTENSION__ && window. __REDUX_DEVTOOLS_EXTENSION__() // this is for devtools
    )
);

const persistedStore = persistStore(store);

export { store, persistedStore }