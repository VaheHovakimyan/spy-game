import { Link } from "react-router-dom";
import Participians from "./StartPageSpyGameComponents/Participians";
import SpyCount from "./StartPageSpyGameComponents/SpyCount";
import Time from "./StartPageSpyGameComponents/Time";
import Warning from "./StartPageSpyGameComponents/Warning";
import Back from '../../Categories/CategoriesImagesAndIcons/Back.png';
import '../../SpyGame.scss';
import './StartPageMain.scss';
import './StartPageMainMedia.scss';


export default function StartPage({ lang,setLang,categories,setCategories,participians,setParticipians,countSpy,setCountSpy,time,setTime,page,setPage,warning,setWarning,word_index,setWord_index,ready_array,index,setIndex,time_value,setTime_value,cycle,setCycle }) {

    // console.log(`lang ${lang}`);
    // console.log(`categories ${categories}`);


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
                    countSpy={countSpy}
                    setCountSpy={setCountSpy}
                    lang={lang}
                    setLang={setLang}
                />

                <SpyCount
                    countSpy={countSpy}
                    setCountSpy={setCountSpy}
                    participians={participians}
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