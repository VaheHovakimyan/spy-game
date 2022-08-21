import { Link } from 'react-router-dom';
import Spy_game from './Spy_game';

export default function NotFound(){
    return(
        <>
            <h1>
                <Link to="/" element={<Spy_game />} > {lang === 0 ? "Հետ գլխավոր էջ" : lang === 1 ? "Вернуться на главную страницу" : "To home page"} </Link>
            </h1>
        </>
    )
  }