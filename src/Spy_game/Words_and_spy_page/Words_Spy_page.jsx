// import data_arm_location from '../Words/Armenian_words/Arm_location.json';
// import data_arm_funny_words from '../Words/Armenian_words/Arm_funny_words.json';

// import data_rus_location from '../Words/Russian_words/Rus_location.json';

// import data_eng_location from '../Words/English_words/Eng_location.json';

import { useState,useEffect } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Time_page from '../Time_page/Time_page';
import '../Spy_game.scss';



export default function Words_and_Spy({ participians, ready_array, word_index, setWord_index, index, setIndex, lang }) {


    let word = ready_array.map((item, i) => {
        if(index === i){
            return(
                <h1 key={Math.random()} >{word_index % 2 === 0 ? "Հաջորդ բառը" : item}</h1>
            )
        }
    })

    

    return (
        <>

        <div>

            {word}

            <button
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    {word_index % 2 === 1 && setIndex(index + 1)}
                    setWord_index(word_index + 1);
                }}
            >{((participians * 2) - 1 === word_index) ? <Link to="/time" className="link"><div className="link_text"> {lang === 0 ? "Ժամանակ" : lang === 1 ? "Время" : "Time"}  </div></Link> : (word_index % 2 === 0) ? (lang === 0 ? "Բացել" : lang === 1 ? "Открыть" : "Open") : (lang === 0 ? "Փակել" : lang === 1 ? "Закрыть" : "Close")} </button>
                <h1>{word_index}</h1>
        </div>

        </>
    )
}