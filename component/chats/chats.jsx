import React from 'react';
import Header from '../header';
import Chat from './chat';
import Tab from '../tab';

const Chats = () => {
    const chatsData = [
        {   
            link : 'chat.html',
            image: "images/profile.png",
            name: 'pizza guy',
            message: '0:08 sec',
            time: '오전 9:56',
            count: 5
        },
        {   
            link : 'chat.html',
            image: "images/profile.png",
            name: 'pizza guy',
            message: '0:08 sec',
            time: '오전 9:56',
            count: 5
        },
        {   
            link : 'chat.html',
            image: "images/profile.png",
            name: 'pizza guy',
            message: '0:08 sec',
            time: '오전 9:56',
            count: 5
        },
        {   
            link : 'chat.html',
            image: "images/profile.png",
            name: 'pizza guy',
            message: '0:08 sec',
            time: '오전 9:56',
            count: 5
        },
    ];

    const ChatComponents = (chatsData) => {
        return chatsData.map((chat, i)=>{
            return <Chat link={chat.link} image={chat.image} name={chat.name} 
                        sec={chat.message} time={chat.time} count={chat.count}/> 
        });
    }
    return (
        <>
            <Header name={"채팅"}/> 
            {ChatComponents(chatsData)}
            <nav class="tab-bar">
                <Tab link={"friends.html"} isSelected={false} icon={"images/ic_friends.svg"}/>
                <Tab link={"chats.html"} isSelected={true} icon={"images/ic_chatting.svg"}/>
            </nav>
        </>
    );
}

export default Chats;