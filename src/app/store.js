import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";

const rootReducer =combineReducers({
   jobState: jobSlice,
})
export default configureStore({reducer:rootReducer})