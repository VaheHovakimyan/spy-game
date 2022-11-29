import { useDispatch, useSelector } from 'react-redux';
import {
    selectIntroPageShowRate,
    introPageShowRateValue,
    selectIntroPageLang
} from '../../../../Data/Feautures/IntroPageState/IntroPageSlice';
import Close from '../../../IntroPageIconsAndImage/Close.png';
import '../../HeaderIntro.scss';
import './Rate.scss';


export default function RateComp() {

    const dispatch = useDispatch();

    const showRate = useSelector(selectIntroPageShowRate);
    const lang = useSelector(selectIntroPageLang);

    return (
        <>
            <div className={showRate ? "info" : "show_info"}>

                <div className='close_div'>
                    <div className='close_div_empty'></div>
                    <div className='close_button' onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(introPageShowRateValue(!showRate));
                    }}>
                        <img src={Close} alt="Close_icon" className='close_icon' />
                    </div>
                </div>


                <div className='rate_div'>
                    <span className='rate_text'>
                        {
                            lang === 0 ? "Խաղի այս հատվածը օգտագործվելու է երբ խաղը կտեղադրվի Google Play-ում" :
                                lang === 1 ? "Эта часть игры будет использоваться при загрузке игры в Google Play" :
                                    "This part of the game will be used when the game is uploaded to Google Play"
                        }
                    </span>
                </div>
                
            </div>
        </>
    )
}