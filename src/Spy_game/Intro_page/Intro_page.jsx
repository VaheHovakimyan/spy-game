import { useState } from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import './Intro_page.scss'


export default function Intro_page({lang, setLang}){

    // const [lang, setLang] = useState(0);

    console.log(lang);

    return(
        <>
        
            <button className='intro_button' onClick={() => {
                setLang(0);
                // console.log(lang);
            }}>Hayeren</button>

            <button className='intro_button' onClick={() => {
                setLang(1);
                // console.log(lang);
            }}>Ruseren</button>

            <button className='intro_button' onClick={() => {
                setLang(2);
                // console.log(lang);
            }}>Angleren</button>

            <h1>Intro Page</h1>
            <Link to="/categories" className="link"><button className='intro_button'> Play </button></Link>
        </>
    )
}