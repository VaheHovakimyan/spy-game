import Rules from '../Intro_page_icons_and_image/Rules.png';
import Rate from '../Intro_page_icons_and_image/Rate.png';
import Languages from '../Intro_page_icons_and_image/Languages.png';
import './Header_intro.scss';
import './Header_intro_media.scss';


export default function Header_Intro() {
    return (
        <>
            <div className="Header_intro_main">
                <div><img src={Rules} alt="Question icon" className='elem'/></div>
                <div><img src={Rate} alt="Rate icon" className='elem'/></div>
                <div><img src={Languages} alt="Languages icon" className='elem'/></div>
            </div>
        </>
    )
}