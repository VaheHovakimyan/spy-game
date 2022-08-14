import Rules from '../Intro_page_icons_and_image/Rules.png';
import Rate from '../Intro_page_icons_and_image/Rate.png';
import Languages from '../Intro_page_icons_and_image/Languages.png';
import Info from '../Intro_page_icons_and_image/Info.png';
import Info_comp from './Header_components/Info/Info';
import Languages_comp from './Header_components/Languages/Languages';
import Rate_comp from './Header_components/Rate/Rate';
import Rules_comp from './Header_components/Rules/Rules';
import './Header_intro.scss';
import './Header_intro_media.scss';

export default function Header_Intro({ showInfo,setShowInfo,showLanguages,setShowLanguages,showRate,setShowRate,showRules,setShowRules }) {



    return (
        <>
            <div className="Header_intro_main">


                <div onClick={(evt) => {
                    evt.preventDefault();
                    setShowInfo(!showInfo);
                }}>
                    <img src={Info} alt="Info icon" className='elem' />
                </div>

                <Info_comp
                    showInfo={showInfo}
                    setShowInfo={setShowInfo}
                />


                <div className='ruless' onClick={(evt) => {
                    evt.preventDefault();
                    setShowRules(!showRules);
                }}>
                    <img src={Rules} alt="Rules icon" className='elem' />
                </div>

                <Rules_comp
                    showRules={showRules}
                    setShowRules={setShowRules}
                />



                <div onClick={(evt) => {
                    evt.preventDefault();
                    setShowRate(!showRate);
                }}>
                    <img src={Rate} alt="Rate icon" className='elem' />
                </div>

                <Rate_comp
                    showRate={showRate}
                    setShowRate={setShowRate}
                />


                <div onClick={(evt) => {
                    evt.preventDefault();
                    setShowLanguages(!showLanguages);
                }}>
                    <img src={Languages} alt="Languages icon" className='elem' />
                </div>

                <Languages_comp
                    showLanguages={showLanguages}
                    setShowLanguages={setShowLanguages}
                />
            </div>
        </>
    )
}