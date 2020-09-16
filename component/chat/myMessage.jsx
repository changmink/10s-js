import React from 'react';

const MyMessage  = ({last, time, message}) => {
    console.log("isLast", last)
    const messageTime = (last) => {
        return last ? <div class="message-time">{time}</div> : null 
    };
    return (
            <div class="my-message-container">
                { messageTime(last) }
                <div class="my-message">
                    <div class="my-message-button">
                        <img class="my-message-button-img" src="images/ic_voice_play.svg" alt=""/>
                        <div class="my-message-sec">
                            {message.sec}
                    </div>
                </div> 
                </div>
            </div>
        );

}

export default MyMessage;