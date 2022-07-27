import data from '../Spy_game.json';
import { useState,useEffect } from 'react';
import '../Spy_game.scss';



export default function Words_and_Spy({ participians, countSpy, ready_array, word_index, setWord_index, index, setIndex, time_value, setTime_value }) {

    let word = ready_array.map((item, i) => {
        if(index === i){
            return(
                <h1 key={Math.random()} >{word_index % 2 === 0 ? "Հաջորդ բառը" : item}</h1>
            )
        }
    })

    // console.log(word);


    return (

        <div>

            {word}

            <button
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    {word_index % 2 === 1 && setIndex(index + 1)}
                    setWord_index(word_index + 1);
                    // console.log(`Mard ${participians}`);
                    // console.log(`Index ${word_index}`);
                }}
            > {((participians * 2) - 1 === word_index) ? "Time" : (word_index % 2 === 0) ? "Open" : "Close"}</button>

                <h1>{word_index}</h1>
        </div>

    )
}