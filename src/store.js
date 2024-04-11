import { combineReducers,configureStore } from "@reduxjs/toolkit";
import langSliceReducer from "./Slices/langSlice";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";

const persistConfig = {
    key:'root',
    storage
}
const rootReducer = combineReducers({
    langSlice:langSliceReducer,
})

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer:  persistedReducer 
})

export const persistor = persistStore(store)