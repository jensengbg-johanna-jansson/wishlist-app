import React from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { useHistory } from "react-router-dom";
import './Nav.scss';

const mapStateToProps = state => {
    return {
        currentListView: state.currentListView
    };
};

const CONST = {
    subMenu: 'subMenu',
    backTitle: 'backTitle'
}
  
function Nav ({
    currentListView,
    title,
    toolbar,
    ...props}) {
    let history = useHistory();

    const handleUpdateListView = (to) => {
        store.dispatch({type:'UPDATE_LISTVIEW', payload:to});
    }

    const createPrevPageSection = (title) => {
        return (
            <div className="nav-default-submenu">
                <button onClick={() => history.goBack()}><i className="fas fa-chevron-left nav-back-icon"></i></button>
                <h2>{title}</h2>
            </div>
        )
    }

    const createSubNavSection = () => {
        return (
            <div className="nav-home-submenu">
                <button 
                    className={`nav-home-submenu-button ${currentListView==='myWishlists' ? 'current' : ''}`} 
                    onClick={() => handleUpdateListView('myWishlists')}>My Wishlists</button>
                <button 
                    className={`nav-home-submenu-button ${currentListView==='sharedWishlists' ? 'current' : ''}`}
                    onClick={() => handleUpdateListView('sharedWishlists')}>Shared Wishlists</button>
                <span className={`nav-home-submenu-current-underline ${currentListView==='sharedWishlists' ? 'current-right' : ''}`}></span>
            </div>
        )
    }

    const createSubMenu = () => {
        switch(toolbar) {
            case CONST.subMenu:
                return createSubNavSection();
            case CONST.backTitle:
                return createPrevPageSection(title);
            default:
                return '';
        }
    }
        
    return(
        <div className="nav">
            <div className="nav-top-bar">
                <button className="nav-menu-button"><i className="fas fa-bars"></i></button>
                <h1 className="nav-title">myWishlist</h1>
            </div>
            {createSubMenu()}
        </div>
    )
}

export default connect(mapStateToProps)(Nav);
export {CONST};