import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIntroPageLang } from '../Data/Feautures/IntroPageState/IntroPageSlice';
import HeaderIntro from './HeaderIntro/HeaderIntro';
import Main_image from './IntroPageIconsAndImage/Main_image.png';
import './IntroPage.scss';
import './IntroPageMedia.scss';
import LoaderComp from '../Categories/LoaderComponent/LoaderComponent';



export default function Intro_page({ lang,setLang }) {


    // let lang = JSON.parse(localStorage.getItem("lang"));

    console.log(lang);

    return (
        <>
            <div className='intro_page_main'>

                <HeaderIntro
                    lang={lang}
                    setLang={setLang}
                />

                <div className='intro_image_title'>
                    <h1 className='intro_page_title'> {lang === 0 ? "Խաղ լրտես" : lang === 1 ? "Игра шпион" : "Spy game"} </h1>
                    <div><img src={Main_image} alt="Main_image" className='intro_page_image_main' /></div>
                </div>


                <Link to="/categories" className="intro_page_link">
                    <button className='intro_button'>
                        {lang === 0 ? "Խաղալ" : lang === 1 ? "Играть" : "Play"}
                    </button>
                </Link>

                <div className='ad'></div>
            </div>
        </>
    )
}