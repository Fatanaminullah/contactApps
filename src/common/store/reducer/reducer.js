import * as actionType from './../action/action-type';

const initialState = {
  listContact: [],
  detailContact: {},
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case actionType.GET_LIST_CONTACT:
      return {...state, listContact: payload};
    case actionType.GET_DETAIL_CONTACT:
      return {...state, detailContact: payload};
    case actionType.SET_LOADING:
      return {...state, loading: payload}
    default:
      return state;
  }
}