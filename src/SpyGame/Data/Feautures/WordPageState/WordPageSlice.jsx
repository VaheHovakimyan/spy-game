import { createSlice } from '@reduxjs/toolkit';



export const WordPageSlice = createSlice({
    name: 'wordPage',
    initialState: {
        wordIndex: 0,
        index: 0,
        cycle: 0
    },
    reducers: {
        wordPageWordIndexValue: (state, action) => {
            state.wordIndex = action.payload;
        },
        wordPageIndexValue: (state, action) => {
            state.index = action.payload;
        },
        wordPageCycleValue: (state, action) => {
            state.cycle = action.payload;
        }
    }
})


export const selectWordPageWordIndexValue = (state) => state.wordPage.wordIndex;
export const selectWordPageIndexValue = (state) => state.wordPage.index;
export const selectWordPageCycleValue = (state) => state.wordPage.cycle;


export const {
    wordPageWordIndexValue,
    wordPageIndexValue,
    wordPageCycleValue
} = WordPageSlice.actions;


export default WordPageSlice.reducer;