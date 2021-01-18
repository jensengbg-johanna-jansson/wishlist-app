import React from 'react';
import './WishListCard.scss';

import { connect } from "react-redux";
import { removeWishlistItem } from '../../redux/actions';

import CheckBox from '../common/CheckBox';


class WishListCard extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isRecieved: false
        };
    
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(event) {
        let itemId = this.props.cardInfo.id;
        this.props.removeWishlistItem(itemId);
    }
    
    render() {
        return (
            <article className="wishlist-card">
                <div className="wishlist-card-img"></div>
                <h3 className="wishlist-card-item-name">{this.props.cardInfo.item}</h3>
                <CheckBox
                 id="checkbox1"
                 className="wishlist-card-checkbox"
                 onChange={this.handleCheckboxChange} />
                <p className="wishlist-card-seller">{this.props.cardInfo.seller}</p>
                <p className="wishlist-card-link">Link</p>
            </article>
        )
    }
}

export default connect(
    null,
    { removeWishlistItem }
)(WishListCard);
