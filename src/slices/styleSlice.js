import { createSlice } from "@reduxjs/toolkit";

export const styleSlice = createSlice({
    name: 'styles',
    initialState: {
        column: {},
        row: {},
    },
    reducers: {
        setColumnWidth: (state, action) => {
            state.column[action.payload.column] = action.payload.width;
        },
        setRowHeight: (state, action) => {
            state.row[action.payload.row] = action.payload.height;
        },
        restoreDefaultColumnWidth: (state) => {
            state.column = {};
        },
        restoreDefaultRowHeight: (state) => {
            state.row = {};
        }
    }
});

export const { 
    setColumnWidth, 
    setRowHeight, 
    restoreDefaultColumnWidth, 
    restoreDefaultRowHeight
} = styleSlice.actions;

export default styleSlice.reducer;