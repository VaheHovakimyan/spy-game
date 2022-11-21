import { useEffect } from "react";

export default function (time,time_value,setTime_value,word_index,participians,cycle,setCycle, time_animation, setTime_animation) {

    let time_fun;

    useEffect(() => {
        // setTime_animation(time * 60);
        setTime_value(time * 60);
    },[time,cycle])

    return time_value;
}