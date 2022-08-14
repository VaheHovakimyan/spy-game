import Close from '../../../Intro_page_icons_and_image/Close.png';
import '../../Header_intro.scss';
// import './Rate.scss';

export default function Rate_comp({ showRate, setShowRate }) {


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


                <div>
                    Gnahateq xaxy
                </div>
            </div>
        </>
    )
}