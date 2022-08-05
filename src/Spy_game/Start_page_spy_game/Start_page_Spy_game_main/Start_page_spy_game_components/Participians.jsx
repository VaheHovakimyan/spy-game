import '../../../Spy_game.scss';


export default function Participians({ participians, setParticipians, lang }) {


    return (
        <div className="block_div">
            <button className={participians <= 3 ? "count_minus_opacity" : "count_minus"} onClick={(e) => {
                e.preventDefault();
                {
                    participians > 3 &&
                        setParticipians(participians - 1);
                }
            }}></button>

            <p> {lang === 0 ? "Խաղացող: " : lang === 1 ? "Игрок: " : "Player: "} {participians}</p>

            <button className={participians >= 20 ? "count_plus_opacity" : "count_plus"} onClick={(e) => {
                e.preventDefault();
                {
                    participians < 20 &&
                        setParticipians(participians + 1);
                }
            }}></button>
        </div>
    )
}