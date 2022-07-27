import Languages from './Languages/Languages.jsx';
import Interests from './Interests/Interests.jsx';
import './Footer.scss';

export default function Footer(){
    return(
        <div className="footer">
            <Languages />
            <Interests />
        </div>
    )
}