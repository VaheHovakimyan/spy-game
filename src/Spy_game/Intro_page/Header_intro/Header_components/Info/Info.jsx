import Close from '../../../Intro_page_icons_and_image/Close.png';
import '../../Header_intro.scss';
import './Info.scss';

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
                     
                </div>

                <div className='info_elem'>
                    Programming by Vaspur
                </div>
                <div className='info_elem'>
                    Design by Vaspur
                </div>
                <div className='info_elem'>
                    English words by Gayane Makaryan
                </div>
                <div className='info_elem'>
                    Russian words by Edgar Gasparyan
                </div>
            </div>
        </>
    )
}