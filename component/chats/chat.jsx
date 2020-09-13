import React from 'react';

const Chat = ({link, image, name, sec, time, count}) => {
    const location = `location.href='${link}'`;
    return (
        <div class="chat-list__column" onclick={location}>
            <img class="chat-list__chat-img" src={image} alt="" />
            <div class="chat-list__chat-info-left">
            <div class="chat-list__chat-name">{name}</div>
            <div class="chat-list__chat-sec">{sec}</div>
            </div>
            <div class="chat-list__chat-info-right">
            <div class="chat-list__chat-time">{time}</div>
            <div class="chat-list__message-count">{count}</div>
            </div>
      </div>
    );
}

export default Chat;