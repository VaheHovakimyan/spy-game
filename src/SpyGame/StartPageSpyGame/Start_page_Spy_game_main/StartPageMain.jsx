import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectStartPageParticipians,
    selectStartPageSpy
} from '../../Data/Feautures/StartPageState/StartPageSlice';
import { selectIntroPageLang } from '../../Data/Feautures/IntroPageState/IntroPageSlice';
import { timePagePageValue } from "../../Data/Feautures/TimePageState/TimePageSlice";
import Participians from "./StartPageSpyGameComponents/Participians";
import SpyCount from "./StartPageSpyGameComponents/SpyCount";
import Time from "./StartPageSpyGameComponents/Time";
import Back from '../../Categories/CategoriesImagesAndIcons/Back.png';
import '../../SpyGame.scss';
import './StartPageMain.scss';
import './StartPageMainMedia.scss';


export default function StartPage({ page, setPage, word_index, setWord_index, ready_array, index, setIndex, time_value, setTime_value, cycle, setCycle }) {


    const dispatch = useDispatch();


    const lang = useSelector(selectIntroPageLang);
    const participians = useSelector(selectStartPageParticipians);
    const countSpy = useSelector(selectStartPageSpy);


    return (
        <>
            <div className="Start_page_div">

                <div className='back_to_categories_div'>
                    <Link to="/categories">
                        <img src={Back} alt="Back_icon" className='back_to_categories' /><div></div></Link>
                </div>

                <Participians />

                <SpyCount />

                <Time />


                <button className='button_lets_go' onClick={(evt) => {
                    evt.preventDefault();
                    // dispatch(timePagePageValue(participians - countSpy));
                    setPage(participians - countSpy);
                    setCycle(0);
                }}>
                    <Link to="/word" className="link">
                        <div className="link_text">
                            {
                                lang === 0 ? "Գնացինք" :
                                    lang === 1 ? "Пошли" :
                                        "Let's go"
                            } </div>
                    </Link>
                </button>

                <div className='ad'></div>
            </div>
        </>
    )
}