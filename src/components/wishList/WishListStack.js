import React from 'react';
import './WishListStack.css';
import WishListCard from './WishListCard';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

function WishListStack({items}){
  console.log(items);

  function renderWishList(){
    return items.map(card => {
      return (
        <CSSTransition key={card.id} classNames="fadeandslide" timeout={500}>
          <WishListCard cardInfo={card} />
        </CSSTransition>
      )
    })
  }

  return (
    <section className="wishlist-stack">
      <TransitionGroup className="whishlist-stack-list">
        {renderWishList()}
      </TransitionGroup>
    </section>
  )
}

export default WishListStack;

//<WishListCard cardInfo={card} onItemIsRecieved={props.onRemoveItem} />