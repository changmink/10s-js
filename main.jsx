import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Friends from './component/friends/Friends'
import Chats from './component/chats/chats';
import Chat from './component/chat/chat';
import Profile from './component/profile/profile'
const Main = () => {
    return (
        // <BrowserRouter>
        //     <Link to="/page/friends">friends</Link>
        //     <div>
        //         <Route path="/page/friends" component={Friends}/>     
        //     </div> 
        // </BrowserRouter>
        //<Friends/>
        //<Chats />
        <Profile />
    );
}

export default Main;
