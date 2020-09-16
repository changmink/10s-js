import React from 'react';
import FriendMessage from './friendMessage.jsx';

const FrinedMessageList = () => {
    const friendMessageData = {
        image: "images/profile.png",
        name: "Pizza guy",
        messages:[
            {
                sec: "0:04"
            },
            {
                sec: "0:05"
            },
            {
                sec: "0:06"
            },
        ],
        time: '오전 10:43',
    }
    const friendMessages = (messageData) => {
       const {name, messages, time} = messageData;
       return messages.map((message, i) => {
           return (<FriendMessage key={i} name={name} message={message} time={time} first={i === 0} last={i === messages.length-1}/>);
       });
    }
    return (
        <div class="friend-container">
           <img class="friend-img" src={friendMessageData.image} alt="" />
            <div class="friend-message-list">
               {friendMessages(friendMessageData)}
            </div>
        </div>
    );
}

export default FrinedMessageList;