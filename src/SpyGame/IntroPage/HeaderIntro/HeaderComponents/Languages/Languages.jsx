import Close from '../../../IntroPageIconsAndImage/Close.png';
import Armenian_language from '../../../IntroPageIconsAndImage/Armenian_language.png';
import Russian_language from '../../../IntroPageIconsAndImage/Russian_language.png';
import English_language from '../../../IntroPageIconsAndImage/English_language.png';
import '../../HeaderIntro.scss';
import './Languages.scss';

export default function LanguagesComp({ showLanguages,setShowLanguages,lang,setLang }) {

    console.log(`Lang ${lang}`);

    return (
        <>

            <div className={showLanguages ? "info" : "show_info"}>

                <div className='close_div'>
                    <div className='close_div_empty'></div>
                    <div className='close_button' onClick={(evt) => {
                        evt.preventDefault();
                        setShowLanguages(!showLanguages);
                    }}><img src={Close} alt="Close_icon" className='close_icon' />
                    </div>
                </div>

                <div className='languages_info_div'>
                    <div className='languages_buttons'>
                        <div onClick={() => {
                            setLang(0);
                            setShowLanguages(!showLanguages);
                        }}> <img src={Armenian_language} className='language_button' alt="Armenian_language" /> </div>

                        <div onClick={() => {
                            setLang(1);
                            setShowLanguages(!showLanguages);
                        }}> <img src={Russian_language} className='language_button' alt="Russian_language" /> </div>

                        <div onClick={() => {
                            setLang(2);
                            setShowLanguages(!showLanguages);
                        }}> <img src={English_language} className='language_button' alt="English_language" /> </div>
                    </div>
                </div>


            </div>
        </>
    )
}