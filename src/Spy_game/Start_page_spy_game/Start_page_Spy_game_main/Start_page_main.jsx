import Participians from "./Start_page_spy_game_components/Participians";
import Spy_count from "./Start_page_spy_game_components/Spy_count";
import Time from "./Start_page_spy_game_components/Time";
import Warning from "./Start_page_spy_game_components/Warning.jsx";

export default function Start_page({ participians,setParticipians,countSpy,setCountSpy,time,setTime,page,setPage,warning,setWarning }) {




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
                if (participians - countSpy < 2) {
                    setWarning(!warning);
                }
            }}>Let's go</button>

        </>
    )
}