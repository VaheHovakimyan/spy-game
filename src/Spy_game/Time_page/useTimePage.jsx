import { useState ,useEffect } from "react";

export default function( time, time_value, setTime_value, word_index, participians ){

    // let time_fun;

    useEffect(() => {
        setTime_value(time * 60);   
    },[time])


    // if(word_index >= (participians * 2) - 1){
    //     if(time_value > 55){
    //         setInterval(() => {
    //             setTime_value(time_value - 1);
    //             // console.log(time_value);
    //         }, 1000)
    //     }
    // }
    
    return time_value;
}