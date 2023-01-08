import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    // selectCategoriesPageCategories,
    categoriesPageCategoriesValue
} from '../Data/Feautures/CategoriesPageState/CategoriesPageSlice';
import { selectIntroPageLang } from '../Data/Feautures/IntroPageState/IntroPageSlice';
import { Link } from 'react-router-dom';
import Back from './CategoriesImagesAndIcons/Back.png';
import './Categories.scss';
import './CategoriesMedia.scss';
import LoaderComp from './LoaderComponent/LoaderComponent';


export default function Categories() {

    const [onload, setOnload] = useState(false);

    let onDivLoaded = () => {
        setOnload(true);
    }

    const dispatch = useDispatch();

    // const categories = useSelector(selectCategoriesPageCategories);
    const lang = useSelector(selectIntroPageLang);


    return (
        <>

            <div className='categories'>

                <div className='back_to_main_div'>
                    <Link to="/"><img src={Back} alt="Back_icon" className='back_to_main' /></Link>
                </div>


                <div className='categories_main'>

                    <Link to="/start_page" className='categories_div'>
                        {
                            onload ? <LoaderComp /> :
                                <div className='location_block' onClick={() => {
                                    dispatch(categoriesPageCategoriesValue(0));
                                }}>
                                    <div className='opacity_black' onLoad={onDivLoaded}>
                                        <p className='categories_text'>
                                            {lang === 0 ? "Տեղանուն" : lang === 1 ? "Локация" : "Location"}
                                        </p>
                                    </div>
                                </div>
                        }
                    </Link>


                    <Link to="/start_page" className='categories_div'>
                        <div className='sport_block' onClick={() => {
                            dispatch(categoriesPageCategoriesValue(1));
                        }}>
                            <div className='opacity_black'>
                                <p className='categories_text'>
                                    {lang === 0 ? "Սպորտ" : lang === 1 ? "Спорт" : "Sport"}
                                </p>
                            </div>
                        </div>
                    </Link>


                    <Link to="/start_page" className='categories_div'>
                        <div className='fauna_block' onClick={() => {
                            dispatch(categoriesPageCategoriesValue(2));
                        }}>
                            <div className='opacity_black'>
                                <p className='categories_text'>
                                    {lang === 0 ? "Ֆաունա" : lang === 1 ? "Фауна" : "Fauna"}
                                </p>
                            </div>
                        </div>
                    </Link>


                    <Link to="/start_page" className='categories_div'>
                        <div className='flora_block' onClick={() => {
                            dispatch(categoriesPageCategoriesValue(3));
                        }}>
                            <div className='opacity_black'>
                                <p className='categories_text'>
                                    {lang === 0 ? "Ֆլորա" : lang === 1 ? "Флора" : "Flora"}
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/start_page" className='categories_div'>
                        <div className='profession_block' onClick={() => {
                            dispatch(categoriesPageCategoriesValue(4));
                        }}>
                            <div className='opacity_black'>
                                <p className='categories_text'>
                                    {lang === 0 ? "Մասնագիտություն" : lang === 1 ?
                                        <span className='categories_profession_text'>Профессия</span> :
                                        <span className='categories_profession_text'>Profession</span>}
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/start_page" className='categories_div'>
                        <div className='famous_persons_block' onClick={() => {
                            dispatch(categoriesPageCategoriesValue(5));
                        }}>
                            <div className='opacity_black'>
                                <p className='categories_text'>
                                    {/* <LoaderComp /> */}
                                    {lang === 0 ? "Հայտնի մարդիկ" : lang === 1 ? "Известные люди" : "Famous people"}
                                </p>
                            </div>
                        </div>
                    </Link>

                </div>

                <div className='ad'></div>
            </div >
        </>
    )
}