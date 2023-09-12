import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            name: "Mango",
            url: "/images/mango.jpg",
            price: 5, 
            id: 1234
        }, 
        {
            name: "Watermelon",
            url: "/images/watermelon.jpg",
            price: 1, 
            id: 5678
        }
    ],
}

export const fruits = createSlice({
    name: "fruits",
    initialState,
    reducers: {
        
    }, 
    extraReducers: {
        ['fruitsCart/addOne'] : (state, action) => {
            console.log("hello from extraReducers");
        }
    }
    
})

export default fruits.reducer