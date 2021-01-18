export const addWishlist = content => ({
    type: "ADD_WISHLIST",
    payload: { content }
})

export const removeWishlist = id => ({
    type: "REMOVE_WISHLIST",
    payload: { id }
})

export const addWishlistItem = content => ({
    type: "ADD_WISHITEM",
    payload: { content }
})

export const removeWishlistItem = id => ({
    type: "REMOVE_WISHITEM",
    payload: { id }
})

export const updateListView = view => ({
    type: "UPDATE_LISTVIEW",
    payload: { view }
})