import { createSlice } from '@reduxjs/toolkit';



export const TimePageSlice = createSlice({
    name: 'timePage',
    initialState: {
        timeValue: 1,
        timeAnimation: 0,
        deg: 0,
        page: 0
    },
    reducers: {
        timePageTimeValueValue: (state, action) => {
            state.timeValue = action.payload;
        },
        timePageTimeAnimationValue: (state, action) => {
            state.timeAnimation = action.payload;
        },
        timePageDegValue: (state, action) => {
            state.deg = action.payload;
        },
        timePagePageValue: (state, action) => {
            state.page = action.payload;
        }
    }
})


export const selectTimePageTimeValue = (state) => state.timePage.timeValue;
export const selectTimePageTimeAnimation = (state) => state.timePage.timeAnimation;
export const selectTimePageDeg = (state) => state.timePage.deg;
export const selectTimePagePage = (state) => state.timePage.page;


export const {
    timePageTimeValueValue,
    timePageTimeAnimationValue,
    timePageDegValue,
    timePagePageValue
} = TimePageSlice.actions;


export default TimePageSlice.reducer;