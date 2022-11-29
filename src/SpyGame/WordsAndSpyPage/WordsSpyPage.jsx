import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    selectStartPageParticipians,
} from '../Data/Feautures/StartPageState/StartPageSlice';
import {
    selectIntroPageLang
} from '../Data/Feautures/IntroPageState/IntroPageSlice';
import './WordsAndSpy.scss';
import './WordsAndSpyMedia.scss';


export default function Words_and_Spy({ ready_array, word_index, setWord_index, index, setIndex }) {


    const lang = useSelector(selectIntroPageLang); 
    const participians = useSelector(selectStartPageParticipians);


    let word = ready_array.map((item, i) => {
        if (index === i) {
            return (
                <h1 key={Math.random()} >
                    {word_index % 2 === 0 ?
                        <span className='next_player_text'>
                            {lang === 0 ? <span className='next_player_text'> {word_index === 0 ? "Բացեք բառը" : "Փոխանցեք հաջորդ խաղացողին"} </span> :
                                lang === 1 ? <span className='next_player_text'> {word_index === 0 ? "Открывайте слова" : "Передайте следующему игроку"} </span> :
                                    <span className='next_player_text'> {word_index === 0 ? "Open a word" : "Pass to the next player"} </span>}
                        </span> : item}
                </h1>
            )
        }
    })


    return (
        <>

            <div className='words_and_spy'>

                <div className='text'>
                    <h1 className='word_text'>{word}</h1>
                </div>

                <button
                    className="button"
                    onClick={(e) => {
                        e.preventDefault();
                        { word_index % 2 === 1 && setIndex(index + 1) }
                        setWord_index(word_index + 1);
                    }}>

                    {
                        ((participians * 2) - 1 <= word_index) ?

                            <Link to="/time" className="link">
                                <div className="link_text"> {lang === 0 ? "Ժամանակ" : lang === 1 ? "Время" : "Time"} </div>
                            </Link> :

                            (word_index % 2 === 0) ?
                                (lang === 0 ? "Բացել" : lang === 1 ? "Открыть" : "Open") :
                                (lang === 0 ? "Փակել" : lang === 1 ? "Закрыть" : "Close")
                    }

                </button>

            </div>

        </>
    )
}