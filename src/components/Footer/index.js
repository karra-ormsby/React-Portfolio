import React from 'react';
import gitHubLogo from '../../images/github-mark-white.png'
import linkedInLogo from '../../images/linkedIn-icon.png'
import '../Footer/Footer.css';

function Footer () {
    return (
        <footer className="flex-shrink-0 bg-dark text-white-50">
            <div id='links'> 
                <div></div>
                <a href="https://github.com/karra-ormsby">
                    <img id='icon1' className='icon' src={gitHubLogo} alt="github" width="40" />
                </a>
                <a href="https://au.linkedin.com/">
                    <img id='icon2' className='icon1' src={linkedInLogo} alt="github" width="45.5" />
                </a>
                <div></div>
            </div>
        </footer>
    )
}

export default Footer;