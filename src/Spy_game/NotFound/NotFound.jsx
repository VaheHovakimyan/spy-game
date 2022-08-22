import { Link } from 'react-router-dom';
import Spy_game from '../Spy_game.jsx';
import '../Spy_game.scss';
import './NotFound.scss';

export default function NotFound({ lang }) {
    return (
        <>
            <div className='NotFound'>
                <Link to="/" element={<Spy_game />} className="link"> <div className="link_text"> {lang === 0 ? "Հետ գլխավոր էջ" : lang === 1 ? "Вернуться на главную страницу" : "To home page"} </div> </Link>
            </div>
        </>
    )
}