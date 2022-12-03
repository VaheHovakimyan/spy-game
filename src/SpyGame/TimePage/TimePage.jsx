import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectStartPageParticipians,
    selectStartPageTime
} from '../Data/Feautures/StartPageState/StartPageSlice';
import { selectIntroPageLang } from '../Data/Feautures/IntroPageState/IntroPageSlice';
import {
    selectWordPageWordIndexValue,
    wordPageWordIndexValue,
    selectWordPageIndexValue,
    wordPageIndexValue,
    selectWordPageCycleValue,
    wordPageCycleValue
} from "../Data/Feautures/WordPageState/WordPageSlice";
import {
    selectTimePageTimeValue,
    timePageTimeValueValue,
    selectTimePageTimeAnimation,
    timePageTimeAnimationValue,
    selectTimePageDeg,
    timePageDegValue,
    // selectTimePagePage,
    // timePagePageValue
} from '../Data/Feautures/TimePageState/TimePageSlice';
import { Link } from 'react-router-dom';
import './TimePage.scss';
import './TimePageMedia.scss';


export default function TimePage({ time_animation, setTime_animation, time_value, setTime_value, deg, setDeg, time_current_value, time_bool, setTime_bool }) {



    const dispatch = useDispatch();


    const lang = useSelector(selectIntroPageLang);
    const participians = useSelector(selectStartPageParticipians);
    const time = useSelector(selectStartPageTime);


    const word_index = useSelector(selectWordPageWordIndexValue);
    const index = useSelector(selectWordPageIndexValue);
    const cycle = useSelector(selectWordPageCycleValue);


    // const time_value = useSelector(selectTimePageTimeValue);
    // const time_animation = useSelector(selectTimePageTimeAnimation);
    // const deg = useSelector(selectTimePageDeg);
    // const page = useSelector(selectTimePagePage);



    let minute = Math.floor(time_current_value / 60);
    let second = time_value % 60;

    // dispatch(timePageTimeAnimationValue(time * 60));
    setTime_animation(time * 60);
    setTime_bool(word_index >= (participians * 2) - 1);


    useEffect(() => {
        const time_fun = setInterval(() => {
            time_bool &&
                // dispatch(timePageTimeValueValue((time_value) => (time_value >= 1 ? time_value - 1 : 0)));
                setTime_value((time_value) => (time_value >= 1 ? time_value - 1 : 0));
        }, 1000);

        return () => {
            clearInterval(time_fun);
        }
    }, [time_value, time_bool]);


    // dispatch(timePageDegValue((360 / time_animation) * (time_animation - time_value)));
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
                                    <span>{minute < 10 ? "0" + minute : minute}</span> : <span>{second < 10 ? "0" + second : second}</span>
                                </span>
                            }

                        </h1>
                    </div>
                </div>
                <button
                    className="button_time"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(wordPageCycleValue(1));
                        // setCycle(1);
                        {
                            word_index >= participians * 2 ?

                                dispatch(wordPageWordIndexValue(0)) : 
                                dispatch(wordPageWordIndexValue(word_index + 1));
                                // setWord_index(0) :
                                // setWord_index(word_index + 1)
                        }
                        dispatch(wordPageIndexValue(0));
                        // setIndex(0);
                    }}>

                    <Link to="/start_page" className="link">
                        <div className="link_text">
                            {lang === 0 ? "Ավարտ" : lang === 1 ? "Конец" : "End"}
                        </div>
                    </Link>

                </button>
            </div>

        </>
    )
}