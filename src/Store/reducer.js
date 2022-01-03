import { combineReducers } from "redux";
import entitiesReducer from "./entities";

export default combineReducers({
    entities: entitiesReducer,
    auth: null,
    ui: null
})
