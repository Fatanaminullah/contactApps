import * as actionType from './action-type';
import url from '../../config/axios';

export const setListData = (payload) => ({
  type: actionType.GET_LIST_CONTACT,
  payload,
});
export const setDetailData = (payload) => ({
  type: actionType.GET_DETAIL_CONTACT,
  payload,
});
export const filterData = (payload) => ({
  type: actionType.FILTER_DATA,
  payload,
});

export const setLoading = (payload) => ({
  type: actionType.SET_LOADING,
  payload,
});

// export const filterData = () => (dispatch) => {
//   return
// }

export const getListContact = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    url.get('/contact').then(
      (res) => {
        dispatch(setLoading(false));
        dispatch(setListData(res.data.data));
        resolve();
      },
      (err) => {
        dispatch(setLoading(false));
        dispatch(setListData([]));
        reject();
        console.log('err', err);
      },
    );
  });
};

export const getDetailContact = (request) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    url.get(`/contact/${request}`).then(
      (res) => {
        dispatch(setLoading(false));
        dispatch(setDetailData(res.data.data));
        resolve(res.data.data);
      },
      (err) => {
        dispatch(setLoading(false));
        reject();
        console.log('err detail', err);
      },
    );
  });
};

export const editContact = (id, request) => (dispatch) => {
  console.log('req', id, request);
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    url
      .put(`/contact/${id}`, {
        firstName: request.firstName,
        lastName: request.lastName,
        age: request.age,
        photo: request.photo,
      })
      .then(
        (res) => {
          dispatch(setLoading(false));
          resolve();
        },
        (err) => {
          dispatch(setLoading(false));
          reject();
          console.log('err edit', err);
        },
      );
  });
};
export const addContact = (id, request) => (dispatch) => {
  console.log('req', request);
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    url
      .post('/contact', {
        firstName: request.firstName,
        lastName: request.lastName,
        age: request.age,
        photo: request.photo,
      })
      .then(
        (res) => {
          dispatch(setLoading(false));
          resolve();
        },
        (err) => {
          dispatch(setLoading(false));
          reject();
          console.log('err add', err);
        },
      );
  });
};
export const deleteContact = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    console.log('delete id', id)
    dispatch(setLoading(true));
    url.delete(`/contact/${id}`).then(
      (res) => {
        dispatch(setLoading(false));
        resolve();
      },
      (err) => {
        dispatch(setLoading(false));
        reject();
        console.log('err delete', err);
      },
    );
  });
};
