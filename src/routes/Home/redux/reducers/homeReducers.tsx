import {
  FETCH_HOME_PENDING,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_ERROR
} from '../../../../common/constants/Constants';

const homeData = (
  state = { pending: false, homeData: {}, error: null },

  action
) => {
  switch (action.type) {
    case FETCH_HOME_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_HOME_SUCCESS:
      return {
        ...state,
        pending: false,

        homeData: action.homeData
      };

    case FETCH_HOME_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
};
export default homeData;
