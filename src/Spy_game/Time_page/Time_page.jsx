import { useEffect } from "react";
import { Link } from 'react-router-dom';
import './Time_page.scss';

export default function Time_page({ participians,word_index,setWord_index,time_value,setTime_value,setWarning,setIndex,time_current_value,setCycle,time_bool,setTime_bool,lang, time,  time_animation, setTime_animation }) {


    let minute = Math.floor(time_current_value / 60);
    let second = time_value % 60;
    setTime_animation(time * 6);
    setTime_bool(word_index >= (participians * 2) - 1);

    useEffect(() => {
        const time_fun = setInterval(() => {
            time_bool &&
                setTime_value((time_value) => (time_value >= 1 ? time_value - 1 : 0));
        },1000);
        return () => {
            clearInterval(time_fun);
        }
    },[time_value,time_bool]);


    console.log(`time_value ${time}`);
    // console.log(`time_value ${time_value}`);

    // style={{animation: `circle ${time_value}s linear; transition: all ${time_value} linear;`}}



    // style={{animation: `circle ${time_animation}s linear`}}

    return (
        <>
            <div className="time_page">
                <div className="circle_animation" >
                    <h1 className="time_text">
                        {minute < 10 ? "0" + minute : minute} : {second < 10 ? "0" + second : second}
                    </h1>
                </div>
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
            </div>

        </>
    )
}