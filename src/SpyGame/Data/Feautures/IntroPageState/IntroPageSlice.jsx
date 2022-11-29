import { createSlice } from '@reduxjs/toolkit';


export const IntroPageSlice = createSlice({
    name: 'introPage',
    initialState: {
        showInfo: 0,
        showLanguages: 0,
        showRate: 0,
        showRules: 0,
        lang: 0
    },
    reducers: {
        introPageShowInfoValue: (state, action) => {
            state.showInfo = action.payload;
        },
        introPageShowLanguagesValue: (state, action) => {
            state.showLanguages = action.payload;
        },
        introPageShowRateValue: (state, action) => {
            state.showRate = action.payload;
        },
        introPageShowRulesValue: (state, action) => {
            state.showRules = action.payload;
        },
        introPageLangValue: (state, action) => {
            state.lang = action.payload;
        }
    }
})

export const selectIntroPageShowInfo = (state) => state.introPage.showInfo;
export const selectIntroPageShowLanguages = (state) => state.introPage.showLanguages;
export const selectIntroPageShowRate = (state) => state.introPage.showRate;
export const selectIntroPageShowRules = (state) => state.introPage.showRules;
export const selectIntroPageLang = (state) => state.introPage.lang;

export const {
    introPageShowInfoValue,
    introPageShowLanguagesValue,
    introPageShowRateValue,
    introPageShowRulesValue,
    introPageLangValue
} = IntroPageSlice.actions;

export default IntroPageSlice.reducer;