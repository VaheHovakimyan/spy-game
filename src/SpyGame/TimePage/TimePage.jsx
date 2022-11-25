import { useEffect } from "react";
import { Link } from 'react-router-dom';
import './TimePage.scss';
import './TimePageMedia.scss';


export default function TimePage({ participians, word_index, setWord_index, time_value, setTime_value, setWarning, setIndex, time_current_value, setCycle, time_bool, setTime_bool, lang, time, time_animation, setTime_animation, deg, setDeg }) {


    let minute = Math.floor(time_current_value / 60);
    let second = time_value % 60;
    setTime_animation(time * 60);
    setTime_bool(word_index >= (participians * 2) - 1);

    useEffect(() => {
        
        const time_fun = setInterval(() => {
            time_bool &&
                setTime_value((time_value) => (time_value >= 1 ? time_value - 1 : 0));
        }, 1000);

        return () => {
            clearInterval(time_fun);
        }

    }, [time_value, time_bool]);

    setDeg((360 / time_animation) * (time_animation - time_value));


    return (
        <>
            <div className="time_page">
                <div className="circle_animation_div">
                    <div className="circle_animation" style={{
                        background: `conic-gradient(rgb(230, 145, 67) ${deg}deg, gray 0deg)`,
                        transition: `all ${time_animation}s linear`
                    }}>

                        <h1 className="time_text">

                            {time_value === 0 ?
                                <span className="spy_win_text">{lang === 0 ? "Հաղթեց լրտեսը" : lang === 1 ? "Шпион выиграл" : "The spy won"}</span> :
                                <span>
                                    <span>{minute < 10 ? "0" + minute : minute}</span> :
                                    <span>{second < 10 ? "0" + second : second}</span>
                                </span>
                            }

                        </h1>
                    </div>
                </div>
                <button
                    className="button_time"
                    onClick={(e) => {
                        e.preventDefault();
                        setWarning(true);
                        setCycle(1);
                        { word_index >= participians * 2 ? setWord_index(0) : setWord_index(word_index + 1) }
                        setIndex(0);
                    }}>

                    <Link to="/start_page" className="link">
                        <div className="link_text"> {lang === 0 ? "Ավարտ" : lang === 1 ? "Конец" : "End"} </div>
                    </Link>

                </button>
            </div>

        </>
    )
}