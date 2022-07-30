import { configureStore } from "@reduxjs/toolkit";
import menu from "./menu";

export default configureStore ({
    reducer: {
        menu: menu,
    }
})