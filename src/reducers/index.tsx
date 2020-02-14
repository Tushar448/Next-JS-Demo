import { combineReducers } from 'redux';
import products from '../routes/About/redux/reducers/aboutReducers';
import homeData from '../routes/Home/redux/reducers/homeReducers';
const appReducer = combineReducers({
  products,
  homeData
});

export default appReducer;
