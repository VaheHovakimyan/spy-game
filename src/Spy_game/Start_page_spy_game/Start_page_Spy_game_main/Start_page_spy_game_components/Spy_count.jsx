import '../../../Spy_game.scss';


export default function Spy_count({ countSpy, setCountSpy, lang }) {


    return (
        <div className="block_div">
            <button className={countSpy <= 1 ? "count_minus_opacity" : "count_minus"} onClick={(e) => {
                e.preventDefault();
                {
                    countSpy > 1 &&
                    setCountSpy(countSpy - 1);
                }
            }}></button>

            <p>{lang === 0 ? "Լրտես: " : lang === 1 ? "Шпион: " : "Spy: "} {countSpy}</p>

            <button className={countSpy >= 4 ? "count_plus_opacity" : "count_plus"} onClick={(e) => {
                e.preventDefault();
                {
                    countSpy < 4 &&
                    setCountSpy(countSpy + 1);
                }
            }}></button>
        </div>
    )
}