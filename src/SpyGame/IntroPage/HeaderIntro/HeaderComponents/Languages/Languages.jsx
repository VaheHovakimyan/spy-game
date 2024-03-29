import { useDispatch,useSelector } from 'react-redux';
import {
    selectIntroPageShowLanguages,
    introPageShowLanguagesValue,
    introPageLangValue
} from '../../../../Data/Feautures/IntroPageState/IntroPageSlice';
import Close from '../../../IntroPageIconsAndImage/Close.png';
import Armenian_language from '../../../IntroPageIconsAndImage/Armenian_language.png';
import Russian_language from '../../../IntroPageIconsAndImage/Russian_language.png';
import English_language from '../../../IntroPageIconsAndImage/English_language.png';
import '../../HeaderIntro.scss';
import './Languages.scss';



export default function LanguagesComp({lang, setLang}) {

    const dispatch = useDispatch();

    const showLanguages = useSelector(selectIntroPageShowLanguages);

    // let storedLang = JSON.parse(localStorage.getItem("lang"));


    // if(lang === undefined || lang === null){
    //     lang = 0;
    // }

    // localStorage.setItem("lang",JSON.stringify(lang));

    return (
        <>
            <div className={showLanguages ? "info" : "show_info"}>

                <div className='close_div'>
                    <div className='close_div_empty'></div>
                    <div className='close_button' onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(introPageShowLanguagesValue(!showLanguages));
                    }}><img src={Close} alt="Close_icon" className='close_icon' />
                    </div>
                </div>

                <div className='languages_info_div'>
                    <div className='languages_buttons'>

                        <div onClick={() => {
                            // dispatch(introPageLangValue(0));
                            localStorage.setItem("lang",JSON.stringify(0));
                            dispatch(introPageShowLanguagesValue(!showLanguages));
                            setLang(0);
                            
                        }}>
                            <img src={Armenian_language} className='language_button' alt="Armenian_language" />
                        </div>

                        <div onClick={() => {
                            // dispatch(introPageLangValue(1));
                            dispatch(introPageShowLanguagesValue(!showLanguages));
                            localStorage.setItem("lang",JSON.stringify(1));
                            setLang(1);
                        }}>
                            <img src={Russian_language} className='language_button' alt="Russian_language" />
                        </div>

                        <div onClick={() => {
                            // dispatch(introPageLangValue(2));
                            dispatch(introPageShowLanguagesValue(!showLanguages));
                            localStorage.setItem("lang",JSON.stringify(2));
                            setLang(2);
                        }}>
                            <img src={English_language} className='language_button' alt="English_language" />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}