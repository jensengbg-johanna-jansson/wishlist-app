const initialState = [
  {
    id: 11,
    username: 'Yonachan',
    image: '#orange',
    sharedlists: [2,4]
  },
  {
    id: 12,
    username: 'Testman',
    image: '#purple',
    sharedlists: []
  },
  {
    id: 13,
    username: 'Shupei',
    image: '#green',
    sharedlists: []
  }
]

const users = (state = initialState, action) => {
  return state;
}

export default users;