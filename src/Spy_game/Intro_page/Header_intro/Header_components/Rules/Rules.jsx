import Close from '../../../Intro_page_icons_and_image/Close.png';
import '../../Header_intro.scss';
// import './Rules.scss';

export default function Rules_comp({ showRules, setShowRules }) {


    return (
        <>
            <div className={showRules ? "info" : "show_info"}>

                <div className='close_div'>
                    <div className='close_div_empty'></div>
                    <div className='close_button' onClick={(evt) => {
                        evt.preventDefault();
                        setShowRules(!showRules);
                    }}><img src={Close} alt="Close_icon" className='close_icon' /></div>
                </div>


                <div>
                    Petq e haxtel shpionin nran gtnelov
                </div>
                <div>
                   
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}