import React from 'react';
import gitHubLogo from '../images/github-mark-white.png'
import linkedInLogo from '../images/linkedIn-icon.png'
import '../App.css'

const styles = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '6.5rem',
};


function Footer () {
    return (
        <footer style={styles} className="flex-shrink-0 py-4 bg-dark text-white-50">
            <div id='links'>
                <a href="https://github.com/karra-ormsby">
                    <img className='icon' src={gitHubLogo} alt="github" width="60" />
                </a>
                <a href="https://au.linkedin.com/">
                    <img className='icon' src={linkedInLogo} alt="github" width="64.5" />
                </a>
            </div>
            <div className="container text-center">
                <small>Copyright &copy; Your Website</small>
            </div>
        </footer>
    )
}

export default Footer;