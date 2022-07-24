import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name:'ui',
    initialState: {CartVisible:false},
    reducers:{
        toggle(state){
            state.CartVisible = !state.CartVisible;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;