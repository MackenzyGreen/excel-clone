import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import styleReducer from './slices/styleSlice';

export default configureStore({
    reducer: {
        data: dataReducer,
        styles: styleReducer,
    },
});