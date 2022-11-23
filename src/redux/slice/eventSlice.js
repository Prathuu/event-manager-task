import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    events: [
        // {
        //     title: "something",
        //     type: "sports",
        //     sDate: "20-4-2022",
        //     eDate: "20-4-2022",
        //     desc: "owpvbqvbqwkvivkqw",
        //     handler: "me",
        //     organization: "them",
        //     subEvent: "nothing"
        // }
    ]
}
const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        addEvent: (state, { payload }) => {
            state.events = [...state.events, payload]
        },
    }
})

export default eventSlice.reducer
export const { addEvent, getEvents } = eventSlice.actions
