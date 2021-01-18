import React, {useState, useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';
import { useLocation, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import store from '../redux/store';

import './WishList.css';
import Nav from '../components/common/Nav';
import { CONST } from '../components/common/Nav';
import CreateCard from '../components/wishList/CreateCard';
import WishListStack from '../components/wishList/WishListStack';
import AddButton from '../components/common/AddButton';


const mapStateToProps = state => {
    return {
        wishlists: state.wishlists
    };
};

function WishList({wishlists}) {
    const { wishlistID } = useParams();
    const getWishlist = () => {
        return wishlists.find(wishlist => wishlist.id === parseInt(wishlistID));
    }
    
    const [showCreateCard, setCreateCard] = useState(false);
    const [currentWishlist] = useState(getWishlist);
    const location = useLocation();

    
    useEffect(() => {
        const path = location.pathname.split("/");
        store.dispatch({type:'UPDATE_PATH', payload:path[1]});
    });        

    const toggleCreateCardVisibility = () => {
        setCreateCard(!showCreateCard);
    }

    return (
        <React.Fragment>
            <Nav toolbar={CONST.backTitle} title={currentWishlist.name}></Nav>
            <main className="main-container">
                <WishListStack items={currentWishlist.items} />
                <AddButton styleName="add-item-button" handleClick={toggleCreateCardVisibility} />
                {showCreateCard && 
                    <CSSTransition key="createCardPopUp" classNames="fade" timeout={1000}>
                        <CreateCard closeCreateCard={toggleCreateCardVisibility} />
                    </CSSTransition>
                }
            </main>
        </React.Fragment>
    )
}

export default connect(mapStateToProps)(WishList);

//<WishListStack items={this.state.items} onRemoveItem={this.handleRemoveItem} />
//<CreateCard onSendNewItem={this.handleNewItem} />