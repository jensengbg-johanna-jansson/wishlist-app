import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import WishList from '../containers/WishList';
import Home from '../containers/Home';
import Collection from '../containers/Collection';

/*

Routes Tree

    /
    /wishlists/:userID
        /:wishlistID
    /wishlists/:userID/sharedlists
            * Lists here lead to /wishlists/:userID/:wishlistID
            * where userID is the other users ID
    /profile/:userID

*/

function Routes() {

    return (
        <React.Fragment>
            <Switch>
                <Route path="/wishlists/:userID">
                    <Collection />
                </Route>
                <Route path="/wishlist/:wishlistID">
                    <WishList />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default Routes;