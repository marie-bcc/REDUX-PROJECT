import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counter = createSlice({
    
    name: 'counter',
    initialState, 
    reducers: {
        increment: (state, action) => {
            state.value ++
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})
export const {increment, decrement, incrementByAmount} = counter.actions
export default counter.reducer