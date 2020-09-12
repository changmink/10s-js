import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Friends from './component/friends'
const Main = () => {
    return (
        // <BrowserRouter>
        //     <Link to="/page/friends">friends</Link>
        //     <div>
        //         <Route path="/page/friends" component={Friends}/>     
        //     </div> 
        // </BrowserRouter>
        <Friends/>
    );
}

export default Main;
