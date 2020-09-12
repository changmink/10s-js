import React from 'react';
import Header from './header';

const HeaderIcon = ({icon}) => {
    return (
        <div className="header__column">
            <img src={icon} />
        </div>
    );
}

export default HeaderIcon;