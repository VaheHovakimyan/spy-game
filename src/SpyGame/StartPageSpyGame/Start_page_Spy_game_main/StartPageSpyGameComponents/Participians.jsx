import { useDispatch, useSelector } from 'react-redux';
import {
    startPageParticipiansValue,
    selectStartPageParticipians,
    startPageSpyValue,
    selectStartPageSpy
} from '../../../Data/Feautures/StartPageState/StartPageSlice';
import { selectIntroPageLang } from '../../../Data/Feautures/IntroPageState/IntroPageSlice';
import '../StartPageMain.scss';


export default function Participians() {

    const dispatch = useDispatch();

    const lang = useSelector(selectIntroPageLang);
    const participians = useSelector(selectStartPageParticipians);
    const countSpy = useSelector(selectStartPageSpy);


    return (
        <div className="block_div">
            <button className={participians <= 3 ? "count_minus_opacity" : "count_minus"} onClick={(e) => {
                e.preventDefault();
                {
                    participians > 3 &&
                        dispatch(startPageParticipiansValue(participians - 1));
                    // setParticipians(participians - 1);
                    (participians - countSpy <= 2 && countSpy > 1) &&
                        dispatch(startPageSpyValue(countSpy - 1));
                    // setCountSpy(countSpy - 1)
                }
            }}></button>

            <p> {lang === 0 ? "Խաղացող: " : lang === 1 ? "Игрок: " : "Player: "} {participians}</p>

            <button className={participians >= 30 ? "count_plus_opacity" : "count_plus"} onClick={(e) => {
                e.preventDefault();
                {
                    participians < 30 &&
                        dispatch(startPageParticipiansValue(participians + 1));
                        // setParticipians(participians + 1);
                }
            }}></button>
        </div>
    )
}