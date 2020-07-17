import * as actionType from './action-type';
import url from '../../config/axios';

export const setListData = (payload) => ({
  type: actionType.GET_LIST_CONTACT,
  payload,
});

export const setLoading = (payload) => ({
  type: actionType.SET_LOADING,
  payload,
});

export const getListContact = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    url.get('/contact').then(
      (res) => {
        dispatch(setLoading(false));
        setListData(res.data);
        resolve();
        console.log('res', res);
      },
      (err) => {
        dispatch(setLoading(false));
        setListData([]);
        reject();
        console.log('err', err);
      },
    );
  });
};
