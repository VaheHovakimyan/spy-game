import Close from '../../../Intro_page_icons_and_image/Close.png';
import Armenian_language from '../../../Intro_page_icons_and_image/Armenian_language.png';
import Russian_language from '../../../Intro_page_icons_and_image/Russian_language.png';
import English_language from '../../../Intro_page_icons_and_image/English_language.png';
import '../../Header_intro.scss';
import './Languages.scss';

export default function Languages_comp({ showLanguages,setShowLanguages,lang,setLang }) {

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
                        <div onClick={() => { setLang(0) }}> <img src={Armenian_language} className='language_button' alt="Armenian_language" /> </div>

                        <div onClick={() => { setLang(1) }}> <img src={Russian_language} className='language_button' alt="Russian_language" /> </div>

                        <div onClick={() => { setLang(2) }}> <img src={English_language} className='language_button' alt="English_language" /> </div>
                    </div>
                    <div>
                        {lang === 0 ? "Ավարտ" : lang === 1 ? "Конец" : "End"}
                    </div>
                </div>


            </div>
        </>
    )
}