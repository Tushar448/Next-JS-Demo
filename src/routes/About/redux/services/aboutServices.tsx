import axios from 'axios';

import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError
} from '../actions/aboutActions';

export function fetchProductsAction() {
  return dispatch => {
    dispatch(fetchProductsPending());
    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => {
        dispatch(fetchProductsSuccess(res.data));
        return res;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}
