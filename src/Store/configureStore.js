// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";


export default () => configureStore({ reducer });

