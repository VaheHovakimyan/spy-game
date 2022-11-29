import { createSlice } from '@reduxjs/toolkit';


export const StartPageSlice = createSlice({
    name: 'startPage',
    initialState: {
        participians: 3,
        spy: 1,
        time: 1
    },
    reducers: {
        startPageParticipiansValue: (state, action) => {
            state.participians = action.payload;
        },
        startPageSpyValue: (state, action) => {
            state.spy = action.payload;
        },
        startPageTimeValue: (state, action) => {
            state.time = action.payload;
        }
    }
})

export const selectStartPageParticipians = (state) => state.startPage.participians;
export const selectStartPageSpy = (state) => state.startPage.spy;
export const selectStartPageTime = (state) => state.startPage.time;


export const { startPageParticipiansValue, startPageSpyValue, startPageTimeValue } = StartPageSlice.actions;

export default StartPageSlice.reducer;