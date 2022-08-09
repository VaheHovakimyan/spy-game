import { useState } from 'react';
import Intro_page from './Intro_page/Intro_page.jsx';
import Categories from './Categories/Categories.jsx';
import Start_page from "./Start_page_spy_game/Start_page_Spy_game_main/Start_page_main";
import Words_and_Spy from './Words_and_spy_page/Words_Spy_page';
import Time_page from './Time_page/Time_page';
import useWordArray from './Words_and_spy_page/useWordArray.jsx';
import useTimePage from './Time_page/useTimePage';
import { Routes,Route } from 'react-router-dom';
import NotFound from './NotFound';
import './Spy_game.scss';
import './Spy_game_media.scss';


export default function Spy_game() {


    const [lang,setLang] = useState(0);
    const [categories,setCategories] = useState(0);
    const [participians,setParticipians] = useState(3);
    const [countSpy,setCountSpy] = useState(1);
    const [time,setTime] = useState(1);
    const [time_value,setTime_value] = useState();
    const [page,setPage] = useState(0);
    const [warning,setWarning] = useState(true);
    const [done_array,setDone_array] = useState();
    const [word_index,setWord_index] = useState(0);
    const [index,setIndex] = useState(0);
    const [cycle,setCycle] = useState(0);
    const [time_bool,setTime_bool] = useState();

    const ready_array = useWordArray(participians,countSpy,done_array,setDone_array,cycle,lang,categories);
    const time_current_value = useTimePage(time,time_value,setTime_value,word_index,participians,cycle,setCycle);



    return (
        <>
            <div className='intro_main'>
                <div className='main'>

                    <Routes>
                        <Route path="/" element={
                            <Intro_page
                                lang={lang}
                                setLang={setLang}
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
                            <Start_page
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
                            <Words_and_Spy
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
                            <Time_page
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
                            />
                        } />
                        <Route path='*' element={<NotFound />} />
                    </Routes>

                </div>
            </div>
        </>
    )
}