const mapDefaultState = [];

export default (state = mapDefaultState, action) => {
  switch(action.type) {
    case 'ADD_POLYGON':
    return [
      ...state,
      action.polygon
    ]
  }
};
