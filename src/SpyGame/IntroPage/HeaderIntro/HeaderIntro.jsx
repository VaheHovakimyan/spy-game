import { useDispatch,useSelector } from 'react-redux';
import {
    selectIntroPageShowInfo,
    introPageShowInfoValue,
    selectIntroPageShowLanguages,
    introPageShowLanguagesValue,
    selectIntroPageShowRate,
    introPageShowRateValue,
    selectIntroPageShowRules,
    introPageShowRulesValue
} from '../../Data/Feautures/IntroPageState/IntroPageSlice';
import Rules from '../IntroPageIconsAndImage/Rules.png';
import Rate from '../IntroPageIconsAndImage/Rate.png';
import Languages from '../IntroPageIconsAndImage/Languages.png';
import Info from '../IntroPageIconsAndImage/Info.png';
import InfoComp from './HeaderComponents/Info/Info';
import LanguagesComp from './HeaderComponents/Languages/Languages';
import RateComp from './HeaderComponents/Rate/Rate';
import RulesComp from './HeaderComponents/Rules/Rules';
import './HeaderIntro.scss';
import './HeaderIntroMedia.scss';



export default function HeaderIntro({ lang,setLang }) {

    const dispatch = useDispatch();


    const showInfo = useSelector(selectIntroPageShowInfo);
    const showRules = useSelector(selectIntroPageShowRules);
    const showRate = useSelector(selectIntroPageShowRate);
    const showLanguages = useSelector(selectIntroPageShowLanguages);


    return (
        <>
            <div className="Header_intro_main">


                <div onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(introPageShowInfoValue(!showInfo));
                }}>
                    <img src={Info} alt="Info icon" className='elem' />
                </div>


                <InfoComp />


                <div className='ruless' onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(introPageShowRulesValue(!showRules))
                }}>
                    <img src={Rules} alt="Rules icon" className='elem' />
                </div>


                <RulesComp />


                <div onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(introPageShowRateValue(!showRate));
                }}>
                    <img src={Rate} alt="Rate icon" className='elem' />
                </div>


                <RateComp />


                <div onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(introPageShowLanguagesValue(!showLanguages));
                }}>
                    <img src={Languages} alt="Languages icon" className='elem' />
                </div>


                <LanguagesComp 
                    setLang={setLang}
                />


            </div>
        </>
    )
}