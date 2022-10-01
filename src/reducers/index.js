const INITIAL_STATE = {
  iconList: [],
  isonSets: [],
};

export default function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "Icons":
      return { ...state, iconList: action.payload };
    default:
      return state;
  }
}
