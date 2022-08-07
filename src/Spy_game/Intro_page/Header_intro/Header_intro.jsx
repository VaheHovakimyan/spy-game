import Question from '../Intro_page_icons_and_image/Question.png';
import Rate from '../Intro_page_icons_and_image/Rate.png';
import Languages from '../Intro_page_icons_and_image/Languages.png';
import './Header_intro.scss';



export default function Header_Intro() {
    return (
        <>
            <div className="Header_intro_main">
                <div className='elem'><img src={Question} alt="Question icon" className='elem'/></div>
                <div className="elem"><img src={Rate} alt="Rate icon" className='elem'/></div>
                <div className="elem"><img src={Languages} alt="Languages icon" className='elem'/></div>
            </div>
        </>
    )
}