import Header_Intro from './Header_intro/Header_intro';
import Main_image from './Intro_page_icons_and_image/Main_image.png';
import { Link } from 'react-router-dom';
import './Intro_page.scss';
import './Intro_page_media.scss';

export default function Intro_page({ lang, setLang, showInfo,setShowInfo,showLanguages,setShowLanguages,showRate,setShowRate,showRules,setShowRules }) {

    

    console.log(lang);

    return (
        <>
            <div className='intro_page_main'>

                <Header_Intro 
                    lang={lang}
                    setLang={setLang}
                    showInfo={showInfo}
                    setShowInfo={setShowInfo}
                    showLanguages={showLanguages}
                    setShowLanguages={setShowLanguages}
                    showRate={showRate}
                    setShowRate={setShowRate}
                    showRules={showRules}
                    setShowRules={setShowRules}
                />

                <div className='intro_image_title'>
                    <h1 className='intro_page_title'> {lang === 0 ? "Խաղ լրտես" : lang === 1 ? "Игра шпион" : "Spy game"} </h1>
                    <div><img src={Main_image} alt="Main_image" className='intro_page_image_main' /></div>
                </div>

                <Link to="/categories" className="intro_page_link"><button className='intro_button'> {lang === 0 ? "Խաղալ" : lang === 1 ? "Играть" : "Play"} </button></Link>

                <div className='ad'></div>
            </div>
        </>
    )
}