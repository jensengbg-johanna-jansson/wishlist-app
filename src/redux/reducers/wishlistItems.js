const initialState = [
    {
        id: 1,
        item: 'An item I want',
        seller: 'Akademibokhandeln'
    }
];

const wishlistItems = function(state = initialState, action) {
    switch (action.type) {
        case "ADD_WISHITEM": {
            let newState = state.concat([action.payload.content]);
            return newState;
        }
        case "REMOVE_WISHITEM": {
            let newState = state.filter(card => card.id !== action.payload.id);
            return newState;
        }
        default:
            return state;
    }
}

export default wishlistItems;