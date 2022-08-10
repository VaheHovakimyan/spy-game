import { Link } from 'react-router-dom';
import Back from './Categories_images_and_icons/Back.png';
import './Categories.scss';


export default function Categories({ lang,setLang,categories,setCategories }) {


    return (
        <>

            <div className='categories'>

                <div className='back_to_main_div'>
                    <Link to="/"><img src={Back} alt="Back_icon" className='back_to_main' /></Link>
                </div>


                <div className='categories_main'>

                    <Link to="/start_page" className='categories_div'>
                        <div className='location_block' onClick={() => { setCategories(0) }}>
                            <div className='opacity_black'>
                                <p className='categories_text'>
                                    {lang === 0 ? "Տեղանուն" : lang === 1 ? "Локация" : "Location"}
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/start_page" className='categories_div'>
                        <div onClick={() => { setCategories(1) }}
                        >{lang === 0 ? "Տեղանուն (հատուկ)" : lang === 1 ? "Локация (спец.)" : "Location (special)"}</div>
                    </Link>



                    <Link to="/start_page" className='categories_div'>
                        <div className='fauna_block' onClick={() => { setCategories(2) }}>
                            <div className='opacity_black'>
                                <p className='categories_text'>
                                    {lang === 0 ? "Ֆաունա" : lang === 1 ? "Фауна" : "Fauna"}
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/start_page" className='categories_div'>
                        <div className='flora_block' onClick={() => { setCategories(3) }}>
                            <div className='opacity_black'>
                                <p className='categories_text'>
                                    {lang === 0 ? "Ֆլորա" : lang === 1 ? "Флора" : "Flora"}
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/start_page" className='categories_div'>
                        <div className='profession_block' onClick={() => { setCategories(4) }}>
                            <div className='opacity_black'>
                                <p className='categories_text'>
                                    {lang === 0 ? "Մասնագիտություն" : lang === 1 ? "Профессия" : "Profession"}
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/start_page" className='categories_div'>
                        <div className='famous_persons_block' onClick={() => { setCategories(5) }}>
                            <div className='opacity_black'>
                                <p className='categories_text'>
                                    {lang === 0 ? "Հայտնի մարդիկ" : lang === 1 ? "Известные люди" : "Famous people"}
                                </p>
                            </div>
                        </div>
                    </Link>

                </div>

                <div className='ad'></div>
            </div>


        </>
    )
}