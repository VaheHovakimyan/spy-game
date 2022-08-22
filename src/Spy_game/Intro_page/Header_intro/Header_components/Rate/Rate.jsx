import Close from '../../../Intro_page_icons_and_image/Close.png';
import '../../Header_intro.scss';
import './Rate.scss';

export default function Rate_comp({ showRate, setShowRate, lang }) {


    return (
        <>
            <div className={showRate ? "info" : "show_info"}>

                <div className='close_div'>
                    <div className='close_div_empty'></div>
                    <div className='close_button' onClick={(evt) => {
                        evt.preventDefault();
                        setShowRate(!showRate);
                    }}><img src={Close} alt="Close_icon" className='close_icon' /></div>
                </div>


                <div className='rate_div'>
                    <span className='rate_text'> {lang === 0 ? "Խաղի այս հատվածը օգտագործվելու է երբ խաղը կտեղադրվի Google Play-ում" : lang === 1 ? "Эта часть игры будет использоваться при загрузке игры в Google Play" : "This part of the game will be used when the game is uploaded to Google Play"} </span>
                </div>
            </div>
        </>
    )
}