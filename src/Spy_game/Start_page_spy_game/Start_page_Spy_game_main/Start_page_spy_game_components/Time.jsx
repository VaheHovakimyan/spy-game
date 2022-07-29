import '../../../Spy_game.scss';


export default function Time({ time, setTime }) {


    return (
        <div className="block_div">
            <button className={time === 1 ? "count_minus_opacity" : "count_minus"} onClick={(e) => {
                e.preventDefault();
                {
                    time > 1 &&
                    setTime(time - 1);
                }
            }}></button>

            <p>Time: {time} minute</p>

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