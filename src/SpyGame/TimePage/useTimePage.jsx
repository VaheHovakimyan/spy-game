import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStartPageTime } from '../Data/Feautures/StartPageState/StartPageSlice';
import { 
    timePageTimeValueValue,
    selectTimePageTimeValue
 } from '../Data/Feautures/TimePageState/TimePageSlice';



export default function (cycle, time_value, setTime_value, time) {

    // setTime_value,

    let time_fun;

    const dispatch = useDispatch();

    // const time = useSelector(selectStartPageTime);
    // const time_value = useSelector(selectTimePageTimeValue);

    useEffect(() => {
        // setTime_animation(time * 60);

            // dispatch(timePageTimeValueValue(time * 60));
       
        setTime_value(time * 60);
    },[time,cycle])

    return time_value;

}