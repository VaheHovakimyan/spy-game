import { useEffect } from "react";
import Start_page from "../Start_page_spy_game/Start_page_Spy_game_main/Start_page_main";
import useTimePage from "./useTimePage";
import { Routes,Route,Link } from 'react-router-dom';


export default function Time_page({ participians,word_index,setWord_index,time_value,setTime_value,setWarning,setIndex,time_current_value,setCycle,time_bool,setTime_bool, lang }) {


    let minute = Math.floor(time_current_value / 60);
    let second = time_value % 60;
    setTime_bool(word_index >= (participians * 2) - 1);

    useEffect(() => {
        const time_fun = setInterval(() => {
            time_bool &&
                setTime_value((time_value) => (time_value >= 1 ? time_value - 1 : 0));
        },1000)
        return () => {
            clearInterval(time_fun)
        }
    },[time_value, time_bool]);



    console.log(`time_value ${time_value}`);



    return (
        <>
            <h1>
                {minute < 10 ? "0" + minute : minute} : {second < 10 ? "0" + second : second}
            </h1>
            <button
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    setWarning(true);
                    setCycle(1);
                    { word_index >= participians * 2 ? setWord_index(0) : setWord_index(word_index + 1) }
                    setIndex(0);
                }}
            ><Link to="/start_page" className="link"><div className="link_text"> {lang === 0 ? "Ավարտ" : lang === 1 ? "Конец" : "End"} </div></Link></button>
        </>
    )
}