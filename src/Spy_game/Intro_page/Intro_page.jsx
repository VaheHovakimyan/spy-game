import Header_Intro from './Header_intro/Header_intro';
import Main_image from './Intro_page_icons_and_image/Main_image.png';
import { Link } from 'react-router-dom';
import './Intro_page.scss'


export default function Intro_page({ lang,setLang }) {


    console.log(lang);

    return (
        <>
            <div className='intro_page_main'>

                <Header_Intro />

                <h1 className='intro_page_title'>Spy game</h1>

                {/* <button className='intro_button' onClick={() => {setLang(0)}}>Hayeren</button>

                <button className='intro_button' onClick={() => {setLang(1)}}>Ruseren</button>

                <button className='intro_button' onClick={() => {setLang(2)}}>Angleren</button> */}

                <div className='intro_page_image_main'><img src={Main_image} alt="Main_image" className='intro_page_image_main' /></div>

                <button className='intro_button'><Link to="/categories" className="intro_page_link"> Play </Link></button>

                <div className='ad'>Ad</div>
            </div>
        </>
    )
}