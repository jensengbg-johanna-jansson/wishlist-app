import React from 'react';
//import './WishListStack.css';
import WishlistsItem from './WishlistsItem';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

function WishlistsStack({
  listStack,
  ...props
}){
  function renderWishlists(){
    return listStack.map(list => {
      return (
        <CSSTransition key={list.id} classNames="fadeandslide" timeout={500}>
          <WishlistsItem listInfo={list} />
        </CSSTransition>
      )
    })
  }

  return (
    <section className="wishlist-stack">
      <TransitionGroup className="whishlist-stack-list">
        {renderWishlists()}
      </TransitionGroup>
    </section>
  )
}

export default WishlistsStack;

//<WishListCard cardInfo={card} onItemIsRecieved={props.onRemoveItem} />