import Close from '../../../Intro_page_icons_and_image/Close.png';
import '../../Header_intro.scss';
// import './Languages.scss';

export default function Languages_comp({ showLanguages,setShowLanguages }) {

    console.log(showLanguages);

    return (
        <>

                <div className={showLanguages ? "info" : "show_info"}>

                    <div className='close_div'>
                        <div className='close_div_empty'></div>
                        <div className='close_button' onClick={(evt) => {
                            evt.preventDefault();
                            setShowLanguages(!showLanguages);
                        }}><img src={Close} alt="Close_icon" className='close_icon' />
                        </div>
                    </div>


                    <div>
                        Armenian
                    </div>
                    <div>
                        Russian
                    </div>
                    <div>
                        English
                    </div>
                </div>
        </>
    )
}