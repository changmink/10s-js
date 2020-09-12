import React from 'react';
import Header from './header';
import Profile from './profile';
import FriendsList from './friendsList';
import Tab from './tab';

const Friends = () => {
    const friendsData = [
        {
            image: "images/profile.png",
            name: "pizza guy",
            state: "do you like pizza?"
        },
        {
            image: "images/profile.png",
            name: "pizza guy",
            state: "do you like pizza?"
        },
        {
            image: "images/profile.png",
            name: "pizza guy",
            state: "do you like pizza?"
        },
        {
            image: "images/profile.png",
            name: "pizza guy",
            state: "do you like pizza?"
        },
        {
            image: "images/profile.png",
            name: "pizza guy",
            state: "do you like pizza?"
        },
        {
            image: "images/profile.png",
            name: "pizza guy",
            state: "do you like pizza?"
        },
        {
            image: "images/profile.png",
            name: "pizza guy",
            state: "do you like pizza?"
        },
    ]

   
    return (
        <>
            <Header/>
            <Profile/>
            <FriendsList friendsData={friendsData} />
            <nav class="tab-bar">
                <Tab link={"friends.html"} isSelected={true} icon={"images/ic_friends.svg"}/>
                <Tab link={"chats.html"} isSelected={false} icon={"images/ic_chatting.svg"}/>
            </nav>
        </>
    );
}

export default Friends;