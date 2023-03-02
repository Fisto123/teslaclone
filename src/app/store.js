import {configureStore} from '@reduxjs/toolkit'
import carReducer from '../features/cart/carSlice'
export const store = configureStore({
    reducer:{
        car:carReducer
    }
})
export default store