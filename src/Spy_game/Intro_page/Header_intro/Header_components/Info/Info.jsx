import Close from '../../../Intro_page_icons_and_image/Close.png';
import '../../Header_intro.scss';
// import './Info.scss';

export default function Info_comp({ showInfo,setShowInfo }) {

    // console.log(showInfo);

    return (
        <>
            <div className={showInfo ? "info" : "show_info"}>

                <div className='close_div'>
                    <div className='close_div_empty'></div>
                    <div className='close_button' onClick={(evt) => {
                        evt.preventDefault();
                        setShowInfo(!showInfo);
                    }}><img src={Close} alt="Close_icon" className='close_icon' /></div>
                </div>

                <div>
                    Programming by ttt tttttt
                </div>
                <div>
                    Design by ttt tttttt
                </div>
                <div>
                    Translate by ttttttt ttttttt
                </div>
            </div>
        </>
    )
}