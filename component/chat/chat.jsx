import React from 'react';
import ChatHeader from './chatHeader';
import MyMessage from './myMessage';
import FrinedMessageList from './friendMessageList';

const Chat = () => {
    const myMessageData = {
            messages:[
                {
                    sec: "0:04"
                },
                {
                    sec: "0:04"
                },
                {
                    sec: "0:04"
                },
            ],
            time: '오전 10:43',
    };
    
    const myMessageComponent = (messageData) => {
        const {messages, time} = messageData;
        
        return messages.map((message, i) => {
            return <MyMessage key={i} last={i === messages.length-1} time={time} message={message}/> 
        });
    }
    return (
        <>
           <ChatHeader name={"Pizza guy"}/> 
           <main class="chat-main">
               {myMessageComponent(myMessageData)}
               <FrinedMessageList/>
           </main>
           <footer className="tab-bar chat-bar">
               <img className="voice-new"class src="images/ic_voice_new.svg" alt=""/>
            </footer>
        </>
    );
}

export default Chat