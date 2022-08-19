import { Link } from "react-router-dom";
import Participians from "./Start_page_spy_game_components/Participians";
import Spy_count from "./Start_page_spy_game_components/Spy_count";
import Time from "./Start_page_spy_game_components/Time";
import Warning from ".//Start_page_spy_game_components/Warning.jsx";
import Back from '../../Categories/Categories_images_and_icons/Back.png';
import '../../Spy_game.scss';
import './Start_page_main.scss';
import './Start_page_main_media.scss';


export default function Start_page({ lang,setLang,categories,setCategories,participians,setParticipians,countSpy,setCountSpy,time,setTime,page,setPage,warning,setWarning,word_index,setWord_index,ready_array,index,setIndex,time_value,setTime_value,cycle,setCycle }) {

    console.log(`lang ${lang}`);
    console.log(`categories ${categories}`);


    return (
        <>
            <div className="Start_page_div">

                <div className='back_to_categories_div'>
                    <Link to="/categories"><img src={Back} alt="Back_icon" className='back_to_categories' /><div></div></Link>
                </div>

                <Warning
                    warning={warning}
                    setWarning={setWarning}
                    lang={lang}
                />

                <Participians
                    participians={participians}
                    setParticipians={setParticipians}
                    lang={lang}
                    setLang={setLang}
                />

                <Spy_count
                    countSpy={countSpy}
                    setCountSpy={setCountSpy}
                    lang={lang}
                    setLang={setLang}
                />

                <Time
                    time={time}
                    setTime={setTime}
                    lang={lang}
                    setLang={setLang}
                />


                <button className='button_lets_go' onClick={(evt) => {
                    evt.preventDefault();
                    if (participians - countSpy < 2) {
                        setWarning(!warning);
                    }
                    setPage(participians - countSpy);
                    setCycle(0);
                }}><Link to="/word" className="link"><div className="link_text"> {lang === 0 ? "Գնացինք" : lang === 1 ? "Пошли" : "Let's go"} </div></Link></button>

                <div className='ad'></div>
            </div>
        </>
    )
}