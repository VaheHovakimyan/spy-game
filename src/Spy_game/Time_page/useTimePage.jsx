import { useState ,useEffect } from "react";

export default function( time, time_value, setTime_value, word_index, participians, cycle, setCycle ){

    // let time_fun;

    useEffect(() => {
        setTime_value(time * 60);
    },[time])

    

    // useEffect(() => {
    //     setTime_value(time_value - 1);
    // },[]);

    // useEffect(() => {
    //     if (word_index >= (participians * 2) - 1) {

    //         if (time_value > 0) {
    //         time_fun = setInterval(() => {
    //             setTime_value(time_value - 1);
    //         },1000)
    //         }else{
    //             clearInterval(time_fun);
    //         }
    //     }
    // },[time_value]);
    
    return time_value;
}