import React from 'react';
import FriendsListColumn from './friendsListColumn';

const FriendsList = ({friendsData}) => {
    const friendsComponent = (friendsData) => {
        return friendsData.map((friend, i) => {
            return (
                <FriendsListColumn friendInfo={friend}/>
            );
        })
    }

    return (
        <div class="friends-list">
                <div class="friends-list__count">내 친구 목록 (<span>{friendsData.length}</span>)</div>
                <div class="friends-list__row">
                    {friendsComponent(friendsData)}
                </div>
        </div>
    );
} 

export default FriendsList;
