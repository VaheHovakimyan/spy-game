import Info from '../../Intro_page_icons_and_image/Info.png';
import '../Header_intro.scss';

export default function Info_comp(showInfo,setShowInfo) {


    return (
        <>
            <div onClick={() => { setShowInfo(1) }}>
                <img src={Info} alt="Question icon" className='elem' />
            </div>
        </>
    )
}