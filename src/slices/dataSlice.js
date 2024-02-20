import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
    name: 'data',
    initialState: {},
    reducers: {
        setCellData: (state, action) => {
            state[action.payload.cell] = action.payload.value;
        }
    }
});

export const { setCellData } = dataSlice.actions;

export default dataSlice.reducer;