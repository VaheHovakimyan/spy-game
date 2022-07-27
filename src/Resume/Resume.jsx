import Education from "./Education/Education.jsx";
import Header from "./Header/Header.jsx";
import Skills from "./Skills/Skills.jsx";
import Footer from "./Footer/Footer.jsx";
import './Resume.scss';


export default function Resume(){
    return(
        <div className="main">
            <Header />
            <Education />
            <Skills />
            <Footer />
        </div>
    )
}