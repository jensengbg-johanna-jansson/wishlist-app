import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from "react-router-dom";
import store from '../redux/store';

import './Home.css';
import Nav from '../components/common/Nav';
import { CONST } from '../components/common/Nav';
import WishlistsStack from '../components/home/WishlistsStack';
import CreateWishlist from '../components/home/CreateWishlist';
import AddButton from '../components/common/AddButton';

const mapStateToProps = state => {
  return {
    currentListView: state.currentListView,
    lists: state.wishlists,
    users: state.users
  };
};

function Collection({lists, currentListView, users}) {   
  const location = useLocation();
  const { userID } = useParams();
  const [showCreate, setShowCreate] = useState(false);

  const getUser = () => {
    return users.find(user => user.id === parseInt(userID));
  }
  
  const getMyWishlists = () => {
    if(currentListView === "sharedWishlists") {
      const currentUser = getUser();

      return lists.filter(list => currentUser.sharedlists.includes(list.id));
    } else {
      return lists.filter(list => list.created_by === parseInt(userID));
    }
  }

  const updatePathState = () => {
    const path = location.pathname.split("/");
    store.dispatch({type:'UPDATE_PATH', payload:path[1]});
  }

  const closePopup = () => {
    setShowCreate(false);
  }

  const handleAddButtonClick = () => {
    setShowCreate(true);
  }

  const handleOnAdd = (e) => {
    closePopup();
    console.log(e);
  }

  useEffect(() => {
    updatePathState();
  });

  return (
    <React.Fragment>
      <Nav toolbar={CONST.subMenu}></Nav>
      <main className="main-container">
        <WishlistsStack listStack={getMyWishlists()} />
        <AddButton handleClick={handleAddButtonClick} />
      </main>
      { showCreate === true ? <CreateWishlist onAddList={handleOnAdd} /> : '' }
    </React.Fragment>
  )
}

export default connect(mapStateToProps)(Collection);
