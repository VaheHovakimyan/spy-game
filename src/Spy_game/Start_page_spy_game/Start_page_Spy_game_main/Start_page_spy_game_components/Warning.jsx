import '../Start_page_main.scss';

export default function Warning({ warning,setWarning,lang }) {


    return (
        <div className={warning ? "check_failed_flex_false" : "check_failed_flex_true"}>
            <div className="check_failed" >
                <p className="check_text_intro">Դե չէ էլի․․․</p>
                <p className="check_text">Մուտքագրված տվյալները սխալ են!!!</p>
                <p className="check_text">Մուտքագրեք այնպիսի տվյալներ որպեսզի խաղի իմաստը չկորի, եթե խաղացողների թիվը երկուսով չի գերազանցում լրտեսների թվին ապա խաղալն անիմաստ է։</p>
                <div className="check_button_flex">
                    <button
                        className="check_button"
                        onClick={(evt) => {
                            evt.preventDefault();
                            setWarning(!warning);
                        }}
                    > {lang === 0 ? "Հասկացա" : lang === 1 ? "Понял" : "Okay"} </button>
                </div>
            </div>
        </div>
    )
}