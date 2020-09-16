import React from 'react';

const ChatHeader = ({name}) => {
    return (
        <header class="header chat-header">
        <h1 class="header__name"> <img src="images/ic_back.svg" alt="" /><div class="header__name-back">{name}</div></h1>
        <div class="header__row">
            <div class="header__column">
            <img src="images/ic_hamburger.svg" alt="" />
            </div>
        </div>
    </header>
    );
}

export default ChatHeader;