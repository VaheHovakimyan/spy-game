import Header_Intro from './Header_intro/Header_intro';
import Main_image from './Intro_page_icons_and_image/Main_image.png';
import { Link } from 'react-router-dom';
import './Intro_page.scss';
import './Intro_page_media.scss';

export default function Intro_page({ lang,setLang, showInfo, setShowInfo }) {

    {/* <button className='intro_button' onClick={() => {setLang(0)}}>Hayeren</button>

                <button className='intro_button' onClick={() => {setLang(1)}}>Ruseren</button>

                <button className='intro_button' onClick={() => {setLang(2)}}>Angleren</button> */}

    console.log(lang);

    return (
        <>
            <div className='intro_page_main'>

                <Header_Intro 
                    showInfo={showInfo}
                    setShowInfo={setShowInfo}
                />

                <div className='intro_image_title'>
                    <h1 className='intro_page_title'> Spy game </h1>
                    <div className='intro_page_image_main'><img src={Main_image} alt="Main_image" className='intro_page_image_main' /></div>
                </div>

                <Link to="/categories" className="intro_page_link"><button className='intro_button'> Play </button></Link>

                <div className='ad'></div>
            </div>
        </>
    )
}