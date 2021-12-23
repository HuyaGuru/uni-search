import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        value: [],
        country: "",
    },
    reducers: {
        setData: (state, action) => {
            state.value = action.payload
        },
        setCountry: (state, action) => {
            state.country = action.payload
        }
    }
})

export default dataSlice.reducer