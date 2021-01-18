import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from "react-router-dom";
import store from '../redux/store';

import './Home.css';
import WishlistsStack from '../components/home/WishlistsStack';

const mapStateToProps = state => {
  return {
    lists: state.wishlists
  };
};

function Home({lists}) {   
  const getMyWishlists = () => {
    return lists.filter(list => list.created_by === 11);
  }
  const location = useLocation();
  const [currentList] = useState(getMyWishlists());

  useEffect(() => {
    store.dispatch({type:'UPDATE_PATH', payload:location.pathname});
  });


  return (
    <main className="main-container">
      <WishlistsStack listStack={currentList} />
    </main>
  )
}

export default connect(mapStateToProps)(Home);
