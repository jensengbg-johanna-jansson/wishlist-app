import React, {useState} from 'react';
import { Link, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import './WishlistsItem.scss';
import UserIcon from '../common/UserIcon';

const mapStateToProps = state => {
    return {
        users: state.users
    };
};


function WishlistsItem({
    users,
    listInfo,
    ...props
}) {
    const { userID } = useParams();
    const getUser = () => {
        return users.find(user => user.id === listInfo.created_by);
    }

    const [user] = useState(getUser());
    let listImg = require('../../images/' + listInfo.image + '.jpg').default;

    
    const createLastEditTag = () => {
        const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
        const d = new Date(listInfo.last_edit);
        const YYYY = d.getFullYear();
        const MM = monthArray[d.getMonth()];
        const dd = d.getDate();
        const date = dd + ' ' + MM + ', ' + YYYY;

        return (
            <p className="wishlist-edited">Last edited {date}</p>
        )
    }

    const createUserIcon = () => {
        const userColor = user.image.replace(/#/g, '');
        const userClass = "user-" + userColor;

        return (
            <UserIcon classname={`wishlist-user ${userClass}`} />
        )
    }

    return (
        <Link className="wishlist" to={`/wishlist/${listInfo.id}`}>
            <div className="wishlist-img">
                <img src={listImg} alt={listInfo.image} />
            </div>
            <h3 className="wishlist-name">{listInfo.name}</h3>
            {createLastEditTag()}
            { parseInt(userID) === listInfo.created_by ? '' : createUserIcon() }
        </Link>
    )
}

export default connect(mapStateToProps)(WishlistsItem);