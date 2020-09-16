import React from 'react';

const FriendMessage = ({name, time, message, first, last}) => {
    const messageTime = (last) => {
        return last ? <div class="message-time">{time}</div> : null 
    };
    return (
        <>
            {first ? <div class="friend-name">{name}</div> : null}  
            <div class="friend-message-container">
                <div class="friend-message">
                    <div class="friend-message-button">
                        <div class="friend-message-sec">
                        {message.sec}
                        </div>
                        <img class="friend-message-button-img" src="images/ic_voice_play.svg" alt=""/>
                    </div>
                </div>
                {messageTime(last)}
            </div>
        </>
    );
}

export default FriendMessage;