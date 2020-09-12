import React from 'react';
import HeaderIcon from'./HeaderIcon';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__name">친구목록</h1>
            <div className="header__row">
                <HeaderIcon icon={"images/ic_setting.svg"}/>
                <HeaderIcon icon={"images/ic_search.svg"}/>
                <HeaderIcon icon={"images/ic_plus.svg"}/>
            </div>
        </header>
    );
}

export default Header;