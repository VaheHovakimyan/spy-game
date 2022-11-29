import { configureStore } from "@reduxjs/toolkit";
import IntroPageReducer from "../Feautures/IntroPageState/IntroPageSlice";
import StartPageReducer from '../Feautures/StartPageState/StartPageSlice';
import CategoriesPageReducer from "../Feautures/CategoriesPageState/CategoriesPageSlice";
import TimePageReducer from "../Feautures/TimePageState/TimePageSlice";



export const store = configureStore({
    reducer: {
        introPage: IntroPageReducer,
        startPage: StartPageReducer,
        categoriesPage: CategoriesPageReducer,
        timePage: TimePageReducer
    },
});
