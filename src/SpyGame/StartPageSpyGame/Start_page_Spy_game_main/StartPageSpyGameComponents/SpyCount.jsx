import '../StartPageMain.scss';


export default function SpyCount({ countSpy, participians, setCountSpy, lang }) {


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

            <button className={participians - countSpy <= 2 || countSpy >= 28 ? "count_plus_opacity" : "count_plus"} onClick={(e) => {
                e.preventDefault();
                {
                    countSpy < 28 &&
                    setCountSpy(countSpy + 1);
                }
                // {participians - countSpy >= 2 ? alert("yes") : alert("no")}
            }}
            disabled={participians - countSpy <= 2}
            // style={{opacity: }}
            ></button>
        </div>
    )
}