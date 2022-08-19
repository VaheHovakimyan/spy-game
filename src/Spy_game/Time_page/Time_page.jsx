import { useEffect } from "react";
import { Link } from 'react-router-dom';
import './Time_page.scss';

export default function Time_page({ participians,word_index,setWord_index,time_value,setTime_value,setWarning,setIndex,time_current_value,setCycle,time_bool,setTime_bool,lang,time,time_animation,setTime_animation,deg,setDeg }) {


    let minute = Math.floor(time_current_value / 60);
    let second = time_value % 60;
    setTime_animation(time * 60);
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

    setDeg((360 / time_animation) * (time_animation - time_value));


    //${(time_animation - time_value) * 3.6}

    return (
        <>
            <div className="time_page">
                <div className="circle_animation_div">
                    <div className="circle_animation" style={{
                        background: `conic-gradient(rgb(230, 145, 67) ${deg}deg, gray 0deg)`,
                        transition: `all ${time_animation}s linear`
                    }}>

                        <h1 className="time_text">
                            <span> <span>{minute < 10 ? "0" + minute : minute}</span> : {second < 10 ? "0" + second : second} </span>
                        </h1>
                    </div>
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