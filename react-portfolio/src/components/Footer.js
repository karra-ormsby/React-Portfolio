import React from 'react';

const styles = {
    position: 'fixed',
    bottom: 0,
    width: '100%'
};


function Footer () {
    return (
        <footer style={styles} className="flex-shrink-0 py-4 bg-dark text-white-50">
            <div className="container text-center">
                <small>Copyright &copy; Your Website</small>
            </div>
        </footer>
    )
}

export default Footer;