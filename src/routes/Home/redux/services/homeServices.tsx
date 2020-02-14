import axios from 'axios';

import {
  fetchHomePending,
  fetchHomeSuccess,
  fetchHomeError
} from '../actions/homeActions';

export function fetchHomeAction() {
  return dispatch => {
    dispatch(fetchHomePending());
    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => {
        dispatch(fetchHomeSuccess(res.data.data));
        return res;
      })
      .catch(error => {
        dispatch(fetchHomeError(error));
      });
  };
}
