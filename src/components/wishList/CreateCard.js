import React from 'react';
import './CreateCard.scss';
import InputField from '../common/InputField';

import { connect } from "react-redux";
import { addWishlistItem } from '../../redux/actions';

class CreateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                itemName: '',
                store: '',
                link: ''
            }
        }
    }  
    
    handleChange = event => {
        const { item } = this.state;
        item[event.target.name] = event.target.value;
        this.setState({ item });
    }

    closeCreateCard = () => {
        this.props.closeCreateCard(true);
    }
    
    handleNewItem = () => {
        let newCardItem = {
            id: Date.now(),
            item: this.state.item.itemName,
            seller: this.state.item.store
        }
        this.props.addWishlistItem(newCardItem);
        this.closeCreateCard();
    }

    render() {
        return (
            <div className="new-wishlist-item-container">
                <div className="new-wishlist-item-overlay" onClick={this.closeCreateCard}></div>
                <div className="new-wishlist-item-form">
                    <h3 className="new-wishlist-item-heading">New item</h3>
                    <InputField 
                      name='itemName' 
                      label="Item name"
                      placeholder='I want...'
                      onChange={this.handleChange}
                      value={this.state.item.itemName} />
                    <InputField 
                      name='store' 
                      label="Store"
                      placeholder='I can be found at...'
                      onChange={this.handleChange}
                      value={this.state.item.store} />
                    <InputField 
                      name='link' 
                      label="Link"
                      placeholder='A link can be helpful...'
                      onChange={this.handleChange}
                      value={this.state.item.link} />
                    <button 
                      className="new-wishlist-item-button"
                      onClick={this.handleNewItem}>
                        <i className="fas fa-check"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { addWishlistItem }
)(CreateCard);
