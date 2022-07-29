import { useEffect } from "react";
import Start_page from "../Start_page_spy_game/Start_page_Spy_game_main/Start_page_main";
import useTimePage from "./useTimePage";
import { Routes,Route,Link } from 'react-router-dom';


export default function Time_page({ participians,setParticipians,word_index,setWord_index,time,time_value,setTime_value,warning,setWarning,index,setIndex,time_current_value, cycle, setCycle }) {


    let minute = Math.floor(time_current_value / 60);
    let second = time_current_value % 60;
    let time_fun;

    
    // if(index >= participians){
    //     setInterval(() => {
    //         setTime_value(time_value - 1);
    //     },3000)
    // }

    // const time_current_value = useTimePage(time,time_value,setTime_value,word_index,participians);


    // if (word_index >= (participians * 2) - 1) {

    //     if (time_value > 0) {
    //     time_fun = setInterval(() => {
    //             setTime_value(time_value - 1);
    //         // console.log(time_value);
    //     },1000)
    //     }else{
    //         clearInterval(time_fun);
    //     }
    // }
    // clearInterval(time_fun);

    

    useEffect(() => {
        if (word_index >= (participians * 2) - 1) {

            if (time_value > 0) {
            time_fun = setInterval(() => {
                setTime_value(time_value - 1);
            },1000)
            }else{
                clearInterval(time_fun);
            }
        }
    },[time_value]);
    

    console.log(`time_current_value ${time_current_value}`);




    return (
        <>
            <h1>
                {/* {time_current_value} */}
                {minute < 10 && "0" + minute} : {second < 10 && "0" + second}
            </h1>
            <button
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    setTime_value(0);
                    setWarning(true);
                    setCycle(1);
                    { word_index >= participians * 2 ? setWord_index(0) : setWord_index(word_index + 1) }
                    setIndex(0);
                }}
            ><Link to="/" className="link"><div className="link_text"> End </div></Link></button>
        </>
    )
}