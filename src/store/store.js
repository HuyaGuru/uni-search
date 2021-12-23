import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./slices/data"

export default configureStore({
    reducer: {
        data: dataReducer,
    },
})