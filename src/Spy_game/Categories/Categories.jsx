import { Routes,Route,Link } from 'react-router-dom';
import './Categories.scss';


export default function Categories({lang, setLang, categories, setCategories}) {


    return (
        <>
            <Link to="/" className="link"><button className='categories_div'> To intro </button></Link>

            <div className='categories_main'>

                <Link to="/start_page" className="link"><div className='categories_div' onClick={() => {
                    setCategories(0);
                }}>{lang === 0 ? "Տեղանուն" : lang === 1 ? "Локация" : "Location"}</div></Link>

                <Link to="/start_page" className="link"><div className='categories_div' onClick={() => {
                    setCategories(1);
                }}>{lang === 0 ? "Տեղանուն (հատուկ)" : lang === 1 ? "Локация (спец.)" : "Location (special)"}</div></Link>

                <Link to="/start_page" className="link"><div className='categories_div' onClick={() => {
                    setCategories(2);
                }}>{lang === 0 ? "Ֆաունա" : lang === 1 ? "Фауна" : "Fauna"}</div></Link>

                <Link to="/start_page" className="link"><div className='categories_div' onClick={() => {
                    setCategories(3);
                }}>{lang === 0 ? "Ֆլորա" : lang === 1 ? "Флора" : "Flora"}</div></Link>

                <Link to="/start_page" className="link"><div className='categories_div' onClick={() => {
                    setCategories(4);
                }}>{lang === 0 ? "Մասնագիտություն" : lang === 1 ? "Профессия" : "Profession"}</div></Link>

                <Link to="/start_page" className="link"><div className='categories_div' onClick={() => {
                    setCategories(5);
                }}>{lang === 0 ? "Հայտնի մարդիկ" : lang === 1 ? "Известные люди" : "Famous people"}</div></Link>

            </div>
        </>
    )
}