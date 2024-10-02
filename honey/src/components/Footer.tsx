import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import phone from '../assets/phone.svg';
import email from '../assets/mail.svg';

import '../styles/Footer.css';

function Footer() {
  return (
    <footer className='footer-main-container'>
        <div className='footer-info-text'>

            <p className='footer-adress'>ul. Brodzińskiego 1, Tarnów 33-100</p>

            <div className='footer-div-phone-contact'>
                <img className='footer-phone-icon' src={phone} alt="phone"/>
                <p className='footer-phone'>+48 728 911 130</p>
            </div>

            <div className='footer-div-emial-contact'>
                <img className='footer-email-icon' src={email} alt="email"/>
                <p className='footer-email'>lyzkawmiodzie@gmail.com</p>
            </div>

            <div className='main-div-all-social-media-icon'>
                <a href="https://www.instagram.com/lyzka_w_miodzie?fbclid=IwZXh0bgNhZW0CMTAAAR2SzlUXpkx-XfjJKAizBvWE2-rOOi7DZUuF-x8c7g9uy1oSOKViL4YVwOI_aem_UX31ZNSY0HtT3koJK9xzEQ" target="_blank" rel="noopener noreferrer">
                    <img className="instagram-footer-style" src={instagram} alt="instagram" />
                </a>

                <a href="https://www.facebook.com/profile.php?id=61550990205897&sk=about" target="_blank" rel="noopener noreferrer">
                    <img className="facebook-footer-style" src={facebook} alt="facebook" />
                </a>
            </div>


        </div>
    </footer>
  )
}

export default Footer
