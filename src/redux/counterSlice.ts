import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

//State slice
export const colorSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        //   setColor: (state) => {
        //     state.value = [...state.value, randomRgb()];
        //   },
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
});

// Action creators are automatically generated for each case reducer function 
export const { increment, decrement } = colorSlice.actions;

export default colorSlice.reducer;