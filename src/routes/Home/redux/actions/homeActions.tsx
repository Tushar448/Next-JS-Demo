import {
  FETCH_HOME_PENDING,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_ERROR
} from '../../../../common/constants/Constants';

export function fetchHomePending() {
  return {
    type: FETCH_HOME_PENDING
  };
}

export function fetchHomeSuccess(homeData) {
  return {
    type: FETCH_HOME_SUCCESS,
    homeData
  };
}

export function fetchHomeError(error) {
  return {
    type: FETCH_HOME_ERROR,
    error: error
  };
}
