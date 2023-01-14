import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound/NotFound.jsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIntroPageLang } from './Data/Feautures/IntroPageState/IntroPageSlice.jsx';
import {
    selectStartPageParticipians,
    selectStartPageSpy,
    selectStartPageTime
} from './Data/Feautures/StartPageState/StartPageSlice';
import { selectCategoriesPageCategories } from './Data/Feautures/CategoriesPageState/CategoriesPageSlice.jsx';
import { selectWordPageCycleValue } from './Data/Feautures/WordPageState/WordPageSlice.jsx';
import {
    selectTimePageTimeValue
} from './Data/Feautures/TimePageState/TimePageSlice';
import IntroPage from './IntroPage/IntroPage.jsx';
import Categories from './Categories/Categories.jsx';
import StartPage from "./StartPageSpyGame/Start_page_Spy_game_main/StartPageMain";
import WordsAndSpy from './WordsAndSpyPage/WordsSpyPage';
import TimePage from './TimePage/TimePage';
import useWordArray from './WordsAndSpyPage/useWordArray.jsx';
import useTimePage from './TimePage/useTimePage';
import './SpyGame.scss';
import './SpyGameMedia.scss';


export default function SpyGame() {

    // Language value

    const lang = useSelector(selectIntroPageLang);

    // Category value

    const categories = useSelector(selectCategoriesPageCategories);

    // Time and time animation values

    // const time_value = useSelector(selectTimePageTimeValue);

    const [time_value, setTime_value] = useState();
    const [time_animation, setTime_animation] = useState(0);
    const [deg, setDeg] = useState(0);
    const [page, setPage] = useState(0);


    // const time_value = useSelector(selectTimePageTimeValue);

    // Word page and array values

    const [done_array, setDone_array] = useState();

    const cycle = useSelector(selectWordPageCycleValue);

    // const [word_index, setWord_index] = useState(0);
    // const [index, setIndex] = useState(0);
    // const [cycle, setCycle] = useState(0);

    const [time_bool, setTime_bool] = useState();

    // Start page state values

    const participians = useSelector(selectStartPageParticipians);
    const countSpy = useSelector(selectStartPageSpy);
    const time = useSelector(selectStartPageTime);

    // Word array and time (hooks)

    const ready_array = useWordArray(participians, countSpy, done_array, setDone_array, cycle, lang, categories);

    console.log(ready_array);

    // localStorage.setItem("word_array", JSON.stringify(ready_array));
    
    // const stored_ready_array = JSON.parse(localStorage.getItem("word_array"));

    // console.log(stored_ready_array);



    const time_current_value = useTimePage(cycle, time_value, setTime_value, time);



    return (
        <>
            <div className='intro_main'>
                <div className='main'>


                    <Routes>
                        <Route path="/" element={
                            <IntroPage />
                        } />
                        <Route path='/categories' element={
                            <Categories />
                        } />
                        <Route path="/start_page" element={
                            <StartPage
                                page={page}
                                setPage={setPage}
                            />
                        } />
                        <Route path="/word" element={
                            <WordsAndSpy
                                page={page}
                                // ready_array={ready_array}
                                // stored_ready_array={stored_ready_array}
                                time_value={time_value}
                                setTime_value={setTime_value}
                            />
                        } />
                        <Route path="/time" element={
                            <TimePage
                                time_current_value={time_current_value}
                                time_bool={time_bool}
                                setTime_bool={setTime_bool}
                                time_value={time_value}
                                setTime_value={setTime_value}
                                time_animation={time_animation}
                                setTime_animation={setTime_animation}
                                deg={deg}
                                setDeg={setDeg}
                            />
                        } />
                        <Route path='*' element={<NotFound />} />
                    </Routes>


                </div>
            </div>
        </>
    )
}