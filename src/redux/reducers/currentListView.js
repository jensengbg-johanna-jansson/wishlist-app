const currentListView = (state = "myWishlists", action) => {
  switch(action.type) {
    case "UPDATE_LISTVIEW": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default currentListView;