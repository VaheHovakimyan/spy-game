import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound/NotFound.jsx';
import { useState } from 'react';
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

    const [showInfo, setShowInfo] = useState(0);
    const [showLanguages, setShowLanguages] = useState(0);
    const [showRate, setShowRate] = useState(0);
    const [showRules, setShowRules] = useState(0);
    const [lang, setLang] = useState(0);

    const [categories, setCategories] = useState(0);

    const [participians, setParticipians] = useState(3);
    const [countSpy, setCountSpy] = useState(1);
    const [time, setTime] = useState(1);
    const [time_value, setTime_value] = useState();
    const [time_animation, setTime_animation] = useState(0);
    const [deg, setDeg] = useState(0);
    const [page, setPage] = useState(0);
    const [warning, setWarning] = useState(true);

    const [done_array, setDone_array] = useState();
    const [word_index, setWord_index] = useState(0);
    const [index, setIndex] = useState(0);
    const [cycle, setCycle] = useState(0);

    const [time_bool, setTime_bool] = useState();

    const ready_array = useWordArray(participians, countSpy, done_array, setDone_array, cycle, lang, categories);
    const time_current_value = useTimePage(time, time_value, setTime_value, word_index, participians, cycle, time_animation, setTime_animation);



    return (
        <>
            <div className='intro_main'>
                <div className='main'>


                    <Routes>
                        <Route path="/" element={
                            <IntroPage
                                lang={lang}
                                setLang={setLang}
                                showInfo={showInfo}
                                setShowInfo={setShowInfo}
                                showLanguages={showLanguages}
                                setShowLanguages={setShowLanguages}
                                showRate={showRate}
                                setShowRate={setShowRate}
                                showRules={showRules}
                                setShowRules={setShowRules}
                            />
                        } />
                        <Route path='/categories' element={
                            <Categories
                                lang={lang}
                                setLang={setLang}
                                categories={categories}
                                setCategories={setCategories}
                            />
                        } />
                        <Route path="/start_page" element={
                            <StartPage
                                lang={lang}
                                setLang={setLang}
                                categories={categories}
                                setCategories={setCategories}
                                participians={participians}
                                setParticipians={setParticipians}
                                countSpy={countSpy}
                                setCountSpy={setCountSpy}
                                time={time}
                                setTime={setTime}
                                page={page}
                                setPage={setPage}
                                warning={warning}
                                setWarning={setWarning}
                                cycle={cycle}
                                setCycle={setCycle}
                            />
                        } />
                        <Route path="/word" element={
                            <WordsAndSpy
                                lang={lang}
                                setLang={setLang}
                                participians={participians}
                                setParticipians={setParticipians}
                                countSpy={countSpy}
                                page={page}
                                word_index={word_index}
                                setWord_index={setWord_index}
                                ready_array={ready_array}
                                index={index}
                                setIndex={setIndex}
                                time_value={time_value}
                                setTime_value={setTime_value}
                            />
                        } />
                        <Route path="/time" element={
                            <TimePage
                                lang={lang}
                                setLang={setLang}
                                participians={participians}
                                setParticipians={setParticipians}
                                warning={warning}
                                setWarning={setWarning}
                                word_index={word_index}
                                setWord_index={setWord_index}
                                time={time}
                                setTime={setTime}
                                time_value={time_value}
                                setTime_value={setTime_value}
                                index={index}
                                setIndex={setIndex}
                                time_current_value={time_current_value}
                                cycle={cycle}
                                setCycle={setCycle}
                                time_bool={time_bool}
                                setTime_bool={setTime_bool}
                                time_animation={time_animation}
                                setTime_animation={setTime_animation}
                                deg={deg}
                                setDeg={setDeg}
                            />
                        } />
                        <Route path='*' element={<NotFound
                            lang={lang}
                        />} />
                    </Routes>


                </div>
            </div>
        </>
    )
}