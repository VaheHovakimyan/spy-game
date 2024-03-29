import { useDispatch, useSelector } from 'react-redux';
import {
    selectIntroPageShowInfo,
    introPageShowInfoValue,
    selectIntroPageLang
} from '../../../../Data/Feautures/IntroPageState/IntroPageSlice';
import Close from '../../../IntroPageIconsAndImage/Close.png';
import '../../HeaderIntro.scss';
import './Info.scss';



export default function InfoComp() {


    const dispatch = useDispatch();

    const showInfo = useSelector(selectIntroPageShowInfo);
    const lang = useSelector(selectIntroPageLang);


    return (
        <>
            <div className={showInfo ? "info" : "show_info"}>

                <div className='close_div'>

                    <div className='close_div_empty'></div>
                    <div className='close_button' onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(introPageShowInfoValue(!showInfo));
                    }}><img src={Close} alt="Close_icon" className='close_icon' /></div>
                    
                </div>

                <div className='info_div'>

                    <div className='info_elem'>
                        {
                            lang === 0 ? "Ծրագրավորումը՝ Վահե Հովակիմյանի" :
                                lang === 1 ? "Программирование Ваге Овакимяна" :
                                    "Programming by Vahe Hovakimyan"
                        }
                    </div>

                    <div className='info_elem'>
                        {
                            lang === 0 ? "Դիզայնը՝ Վահե Հովակիմյանի" :
                                lang === 1 ? "Дизайн Ваге Овакимяна" :
                                    "Design by Vahe Hovakimyan"
                        }
                    </div>

                    <div className='info_elem'>
                        {
                            lang === 0 ? "Անգլերեն բառերը՝ Գայանե Մակարյանի" :
                                lang === 1 ? "Английские слова Гаянэ Макарян" :
                                    "English words by Gayane Makaryan"
                        }
                    </div>

                    <div className='info_elem'>
                        {
                            lang === 0 ? "Ռուսերեն բառերը՝ Էդգար Գասպարյանի" :
                                lang === 1 ? "Русские слова Эдгара Гаспаряна" :
                                    "Russian words by Edgar Gasparyan"
                        }
                    </div>
                    
                </div>

            </div>
        </>
    )
}