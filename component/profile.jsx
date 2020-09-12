import React from 'react';

const Profile = () => {
    return (
        <div class="friends-profile">
        <img
          class="friends-profile__img"
          src="images/profile.png"
          alt="profile_img"
        />
        <h3 class="friends-profile__name">Changmin</h3>
        <div class="friends-profile__state">I like pizza</div>
      </div>
    );
}

export default Profile;