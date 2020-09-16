import React from 'react';

const Profile = () => {
    return (
    <>
        <header class="header chat-header">
            <h1 class="header__name"> <img src="../images/ic_back.svg" alt="" /><div class="header__name-back">프로필 관리</div></h1>
            <div class="header__row">
                <div class="header__column">
                <div class="edit-button">완료</div>
                </div>
            </div>
        </header>
        <main class="profile-main">
            <img class="profile-img" src="../images/profile.png" alt=""/>
            <img class="edit-profile-img" src="../images/ic_camera_change.svg" alt=""/>
            <div class="profile-info">
                <div class="profile-name">Pizza. Kim.<img src="../images/ic_pencil.svg" alt=""/></div>
                <div class="profile-message">I Love pizza. Guys<img src="../images/ic_pencil.svg" alt=""/></div>
            </div>
        </main>
    </>
    );
}

export default Profile;