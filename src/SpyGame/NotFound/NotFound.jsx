import { useSelector } from 'react-redux';
import { selectIntroPageLang } from '../Data/Feautures/IntroPageState/IntroPageSlice.jsx';
import { Link } from 'react-router-dom';
import SpyGame from '../SpyGame.jsx';
import '../SpyGame.scss';
import './NotFound.scss';

export default function NotFound({storedLang}) {

    // const lang = useSelector(selectIntroPageLang);

    // let lang = JSON.parse(localStorage.getItem("lang"));

    return (
        <>
            <div className='NotFound'>
                <Link to="/" element={<SpyGame />} className="link"> <div className="link_text"> {storedLang === 0 ? "Հետ գլխավոր էջ" : storedLang === 1 ? "Вернуться на главную страницу" : "To home page"} </div> </Link>
            </div>
        </>
    )
}