import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Friends from './component/friends/Friends'
import Chats from './component/chats/chats';
import Chat from './component/chat/chat';
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
        <Chat />
    );
}

export default Main;
