import Rules from '../IntroPageIconsAndImage/Rules.png';
import Rate from '../IntroPageIconsAndImage/Rate.png';
import Languages from '../IntroPageIconsAndImage/Languages.png';
import Info from '../IntroPageIconsAndImage/Info.png';
import InfoComp from './HeaderComponents/Info/Info';
import LanguagesComp from './HeaderComponents/Languages/Languages';
import RateComp from './HeaderComponents/Rate/Rate';
import RulesComp from './HeaderComponents/Rules/Rules';
import './HeaderIntro.scss';
import './HeaderIntroMedia.scss';

export default function HeaderIntro({ showInfo,setShowInfo,showLanguages,setShowLanguages,showRate,setShowRate,showRules,setShowRules, lang, setLang }) {



    return (
        <>
            <div className="Header_intro_main">


                <div onClick={(evt) => {
                    evt.preventDefault();
                    setShowInfo(!showInfo);
                }}>
                    <img src={Info} alt="Info icon" className='elem' />
                </div>

                <InfoComp
                    showInfo={showInfo}
                    setShowInfo={setShowInfo}
                    lang={lang}
                />


                <div className='ruless' onClick={(evt) => {
                    evt.preventDefault();
                    setShowRules(!showRules);
                }}>
                    <img src={Rules} alt="Rules icon" className='elem' />
                </div>

                <RulesComp
                    showRules={showRules}
                    setShowRules={setShowRules}
                    lang={lang}
                />



                <div onClick={(evt) => {
                    evt.preventDefault();
                    setShowRate(!showRate);
                }}>
                    <img src={Rate} alt="Rate icon" className='elem' />
                </div>

                <RateComp
                    showRate={showRate}
                    setShowRate={setShowRate}
                    lang={lang}
                />


                <div onClick={(evt) => {
                    evt.preventDefault();
                    setShowLanguages(!showLanguages);
                }}>
                    <img src={Languages} alt="Languages icon" className='elem' />
                </div>

                <LanguagesComp
                    showLanguages={showLanguages}
                    setShowLanguages={setShowLanguages}
                    lang={lang}
                    setLang={setLang}
                />
            </div>
        </>
    )
}