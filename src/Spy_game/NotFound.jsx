import { Link } from 'react-router-dom';
import Spy_game from './Spy_game';

export default function NotFound(){
    return(
        <>
            <h1>
                <Link to="/" element={<Spy_game />} >To Home</Link>
            </h1>
        </>
    )
  }