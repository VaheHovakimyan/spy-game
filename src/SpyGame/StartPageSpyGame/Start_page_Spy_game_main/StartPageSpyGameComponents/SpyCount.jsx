import { useDispatch, useSelector } from 'react-redux';
import {
    selectStartPageParticipians,
    startPageSpyValue,
    selectStartPageSpy
} from '../../../Data/Feautures/StartPageState/StartPageSlice';
import { selectIntroPageLang } from '../../../Data/Feautures/IntroPageState/IntroPageSlice';
import '../StartPageMain.scss';


export default function SpyCount() {

    const dispatch = useDispatch();

    // const lang = useSelector(selectIntroPageLang); 

    let lang = JSON.parse(localStorage.getItem("lang"));

    const participians = useSelector(selectStartPageParticipians);
    const countSpy = useSelector(selectStartPageSpy);

    return (
        <div className="block_div">
            <button className={countSpy <= 1 ? "count_minus_opacity" : "count_minus"} onClick={(e) => {
                e.preventDefault();
                {
                    countSpy > 1 &&
                    dispatch(startPageSpyValue(countSpy - 1));
                    // setCountSpy(countSpy - 1);
                }
            }}></button>

            <p>{lang === 0 ? "Լրտես: " : lang === 1 ? "Шпион: " : "Spy: "} {countSpy}</p>

            <button className={participians - countSpy <= 2 || countSpy >= 28 ? "count_plus_opacity" : "count_plus"} onClick={(e) => {
                e.preventDefault();
                {
                    countSpy < 28 &&
                    dispatch(startPageSpyValue(countSpy + 1));
                    // setCountSpy(countSpy + 1);
                }
                // {participians - countSpy >= 2 ? alert("yes") : alert("no")}
            }}
            disabled={participians - countSpy <= 2}
            ></button>
        </div>
    )
}