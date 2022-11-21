import '../StartPageMain.scss';


export default function Time({ time, setTime, lang }) {


    return (
        <div className="block_div">
            <button className={time === 1 ? "count_minus_opacity" : "count_minus"} onClick={(e) => {
                e.preventDefault();
                {
                    time > 1 &&
                    setTime(time - 1);
                }
            }}></button>

            <p>{lang === 0 ? "Ժամանակ: " : lang === 1 ? "Время: " : "Time: "} {time} {lang === 0 ? "րոպե" : lang === 1 ? "минут" : "minute"}</p>

            <button className={time === 10 ? "count_plus_opacity" : "count_plus"} onClick={(e) => {
                e.preventDefault();
                {
                    time < 10 &&
                    setTime(time + 1);
                }
            }}></button>
        </div>
    )
}