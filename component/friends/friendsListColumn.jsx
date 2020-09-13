import React from 'react';

const FriendsListColumn = ({friendInfo}) => {
    const onClickTalk = () => {
        alert("Hi");
    }
    return (
        <div class="friends-list__column">
            <img class="friend-image" src={friendInfo.image} alt="" />
            <div class="friend-info">
                <div class="friend-name">{friendInfo.name}</div>
                <div class="friend-state">{friendInfo.state}</div>
            </div>
            <img
                class="friend-voice"
                src="images/ic_voice_new.svg"
                alt="voice"
                onClick={onClickTalk}
            />
        </div>
    );
}

export default FriendsListColumn;