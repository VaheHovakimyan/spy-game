import Close from '../../../Intro_page_icons_and_image/Close.png';
import Armenian_flag from '../../../Intro_page_icons_and_image/Armenian_flag.png';
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
                        <div onClick={() => { setLang(0) }}> <img src={Armenian_flag} className='language_button' alt="Armenian_language" /> </div>

                        <div className='language_button' onClick={() => { setLang(1) }}> Ruseren </div>

                        <div className='language_button' onClick={() => { setLang(2) }}> Angleren </div>
                    </div>
                    <div>
                        {lang === 0 ? "Ավարտ" : lang === 1 ? "Конец" : "End"}
                    </div>
                </div>


            </div>
        </>
    )
}