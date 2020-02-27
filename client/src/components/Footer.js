import React from 'react';
import "./navbarstyle.css";

const Footer = props => {
    return (
        <div>
            <div className="container footerContainer">
                <div className="footer">
                    <span className="doubanCom">© 2005－2020 douban.com, all rights reserved 北京豆网科技有限公司</span>
                    <span className="salute" role="img" aria-label="">💌 Salute to Douban.com / 2019-2020 Made by
                <a className="dojoA" href="https://github.com/csdojo" target="_blank" rel="noopener noreferrer">DOJO9</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;