import image from './images_and_icons/resume_image.jpg';
import mail_icon from './images_and_icons/mail_icon.png';
import tel_icon from './images_and_icons/tel_icon.png';
import address_icon from './images_and_icons/address_icon.png';
import './Header.scss';

export default function Header(){
    return(
        <div className='header_main'>

            <div className='main_img'>
                <img src={image} width="100px" height="100px" className='image'/>
            </div>

            <div className='name_contact_main'>

                <p className='name_surname'>Vahe Hovakimyan</p>

                <div className='contact'>
                    <div className='contact_mail'>
                        <img src={mail_icon} width="22px" height="22px" className='header_icons_mail'/>
                        <span>vahe.hovakimyan.19@mail.ru</span>
                    </div>
                    <div className='contact_phone'>
                        <img src={tel_icon} width="20px" height="20px" className='header_icons'/>
                        <span>+374 94 177 419</span>
                    </div>
                    <div className='contact_address'>
                        <img src={address_icon} width="20px" height="20px" className='header_icons'/>
                        <span>Vagharshapat, region Armavir, Armenia</span>
                    </div>
                </div>

            </div>
        </div>
    )
}