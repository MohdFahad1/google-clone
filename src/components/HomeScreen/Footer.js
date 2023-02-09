import React from 'react';
import '../Styles/Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className='country-name'>
                <p>India</p>
            </div>
            <div className='footer-links'>
                <div className='footer_first-links'>
                    <a href='https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1' target
                        ='_blank' rel="noreferrer">About</a>
                    <a href='https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1' target
                        ='_blank' rel="noreferrer">Advertising</a>
                    <a href='https://www.google.com/intl/en_in/business/' target
                        ='_blank'>Business</a>
                    <a href='https://www.google.com/search/howsearchworks/?fg=1' target
                        ='_blank' rel="noreferrer">How Search works</a>
                </div>
                <div className='footer_second-links'>
                    <a href='https://policies.google.com/privacy?hl=en-IN&fg=1' target
                        ='_blank' rel="noreferrer">Privacy</a>
                    <a href='https://policies.google.com/terms?hl=en-IN&fg=1' target
                        ='_blank' rel="noreferrer">Terms</a>
                    <a href='#' target
                        ='_blank' rel="noreferrer">Settings</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer