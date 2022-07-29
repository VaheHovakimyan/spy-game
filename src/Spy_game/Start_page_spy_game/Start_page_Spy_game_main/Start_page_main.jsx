import { Link } from "react-router-dom";
import Time_page from "../../Time_page/Time_page";
import Participians from "./Start_page_spy_game_components/Participians";
import Spy_count from "./Start_page_spy_game_components/Spy_count";
import Time from "./Start_page_spy_game_components/Time";
import Words_and_Spy from "../../Words_and_spy_page/Words_Spy_page";
import Warning from "./Start_page_spy_game_components/Warning.jsx";
import Spy_game from "../../Spy_game";

export default function Start_page({ participians,setParticipians,countSpy,setCountSpy,time,setTime,page,setPage,warning,setWarning,word_index,setWord_index,ready_array,index,setIndex,time_value,setTime_value, cycle, setCycle }) {


    return (
        <>

            <Warning
                warning={warning}
                setWarning={setWarning}
            />

            <Participians
                participians={participians}
                setParticipians={setParticipians}
            />

            <Spy_count
                countSpy={countSpy}
                setCountSpy={setCountSpy}
            />

            <Time
                time={time}
                setTime={setTime}
            />



            <button className='button' onClick={(e) => {
                e.preventDefault();
                setPage(participians - countSpy);
                setCycle(0);
                if (participians - countSpy < 2) {
                    setWarning(!warning);
                }
            }}><Link to="/word" className="link"><div className="link_text"> Let's go </div></Link></button>


        </>
    )
}