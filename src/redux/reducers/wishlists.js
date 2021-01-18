const initialState = [
  {
    id: 1,
    name: 'Christmas 2020',
    created_by: 11,
    image: 'holiday1',
    last_edit: 'Wed Dec 02 2020 12:55:08 GMT+0100 (Central European Standard Time)',
    items: [
      {
        id: 1,
        item: 'An item I want',
        seller: 'Akademibokhandeln'
      }
    ]
  },
  {
    id: 2,
    name: 'My B-day 2021',
    created_by: 12,
    image: 'bday2',
    last_edit: 'Wed Dec 02 2020 12:55:08 GMT+0100 (Central European Standard Time)',
    items: [
      {
        id: 1,
        item: 'The Raven by Edgar Allan Poe',
        seller: 'SFbok'
      }
    ]
  },
  {
    id: 3,
    name: 'Yonas Birthday',
    created_by: 11,
    image: 'bday3',
    last_edit: 'Wed Dec 23 2020 10:55:08 GMT+0100 (Central European Standard Time)',
    items: [
      {
        id: 1,
        item: 'something',
        seller: 'JapanTV'
      }
    ]
  },
  {
    id: 4,
    name: 'Our Wedding',
    created_by: 13,
    image: 'wedding1',
    last_edit: 'Wed Dec 23 2020 10:55:08 GMT+0100 (Central European Standard Time)',
    items: [
      {
        id: 1,
        item: 'A nice vase',
        seller: 'Cervera'
      }
    ]
  },
];

const wishlist = function(state = initialState, action) {
  switch (action.type) {
      case "ADD_WISHLIST": {
          let newState = state.concat([action.payload.content]);
          return newState;
      }
      case "REMOVE_WISHLIST": {
          let newState = state.filter(list => list.id !== action.payload.id);
          return newState;
      }
      case "ADD_WISHITEM": {
        let newState = state.map((list) => {
          if(list.id !== action.payload.listId) {
            return list;
          } else {
            return {
              ...list,
              items: [
                ...list.items, action.payload.content
              ]
            }
          }
        })
        return newState;
      }
      case "REMOVE_WISHITEM": {
        let newState = state.map((list) => {
          if(list.id !== action.payload.listId) {
            return list;
          } else {
            return {
              ...list,
              items: [
                ...list.items.filter(card => card.id !== action.payload.itemId)
              ]
            }
          }
        })
        return newState;
      }
      default:
          return state;
  }
}

export default wishlist;