import { createSlice } from "@reduxjs/toolkit";

const menu = createSlice({
    name: 'menu',
    initialState: {
        styleActive: {
            value: false
        },
    },
    reducers: {
        burg_style: (state, action) => {
            state.styleActive.value = action.payload
        },
    }
});

export const {burg_style} = menu.actions;

export default menu.reducer;