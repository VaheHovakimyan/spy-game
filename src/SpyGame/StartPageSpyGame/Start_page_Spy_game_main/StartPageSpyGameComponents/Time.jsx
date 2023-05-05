import { useDispatch, useSelector } from 'react-redux';
import {
    startPageTimeValue,
    selectStartPageTime
} from '../../../Data/Feautures/StartPageState/StartPageSlice';
import { selectIntroPageLang } from '../../../Data/Feautures/IntroPageState/IntroPageSlice';
import '../StartPageMain.scss';


export default function Time() {

    const dispatch = useDispatch();

    // const lang = useSelector(selectIntroPageLang);
    
    let lang = JSON.parse(localStorage.getItem("lang"));
    
    const time = useSelector(selectStartPageTime);

    return (
        <div className="block_div">
            <button className={time === 1 ? "count_minus_opacity" : "count_minus"} onClick={(e) => {
                e.preventDefault();
                {
                    time > 1 &&
                    dispatch(startPageTimeValue(time - 1));
                    // setTime(time - 1);
                }
            }}></button>

            <p>{lang === 0 ? "Ժամանակ: " : lang === 1 ? "Время: " : "Time: "} {time} {lang === 0 ? "րոպե" : lang === 1 ? "минут" : "minute"}</p>

            <button className={time === 30 ? "count_plus_opacity" : "count_plus"} onClick={(e) => {
                e.preventDefault();
                {
                    time < 30 &&
                    dispatch(startPageTimeValue(time + 1));
                    // setTime(time + 1);
                }
            }}></button>
        </div>
    )
}