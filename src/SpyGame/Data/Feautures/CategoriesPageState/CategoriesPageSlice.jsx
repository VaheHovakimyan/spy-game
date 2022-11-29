import { createSlice } from '@reduxjs/toolkit';


export const CategoriesPageSlice = createSlice({
    name: 'categoriesPage',
    initialState: {
        categories: 0
    },
    reducers: {
        categoriesPageCategoriesValue: (state, action) => {
            state.categories = action.payload;
        }
    }
})

export const selectCategoriesPageCategories = (state) => state.categoriesPage.categories;
// export const selectStartPageSpy = (state) => state.startPage.spy;
// export const selectStartPageTime = (state) => state.startPage.time;

export const { categoriesPageCategoriesValue } = CategoriesPageSlice.actions;

export default CategoriesPageSlice.reducer;