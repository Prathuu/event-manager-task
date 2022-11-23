import { configureStore } from '@reduxjs/toolkit'
import eventSlice from './slice/eventSlice'

const store = configureStore({
    reducer: {
        allEvents: eventSlice
    }
})

export default store