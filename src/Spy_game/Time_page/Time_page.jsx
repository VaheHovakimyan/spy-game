import useTimePage from "./useTimePage";


export default function Time_page({ participians,setParticipians,word_index,setWord_index,time,time_value,setTime_value,warning,setWarning,index, time_current_value }) {


    let minute = time_value / 60;
    let second = time_value % 60;
    let time_fun;
    // if(index >= participians){
    //     setInterval(() => {
    //         setTime_value(time_value - 1);
    //     },3000)
    // }

    // const time_current_value = useTimePage(time,time_value,setTime_value,word_index,participians);


    if (word_index >= (participians * 2) - 1) {

        if (time_value > 55) {
        time_fun = setInterval(() => {
                setTime_value(time_value - 1);
            // console.log(time_value);
        },1000)
        }else{
            clearInterval(time_fun);
        }
        
    }
    // clearInterval(time_fun);

    console.log(`time_current_value ${time_current_value}`);

    


    return (
        <>
            <h1>
                {time_current_value}
            </h1>
            <button
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    setTime_value(0);
                    // setWarning(true);
                    { word_index >= participians * 2 ? setWord_index(0) : setWord_index(word_index + 1) }
                }}
            > End </button>
        </>
    )
}