import { useState,useEffect } from "react";

export default function (time,time_value,setTime_value,word_index,participians,cycle,setCycle) {

    let time_fun;

    useEffect(() => {
        setTime_value(time * 60);
    },[time,cycle])

    return time_value;
}