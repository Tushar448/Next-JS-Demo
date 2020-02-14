import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import appReducer from '../src/reducers/index';
import App from 'next/app';

class MyApp extends App {
  constructor(props) {
    super(props);
  }
  render() {
    const { Component, pageProps } = this.props;

    const applymiddlewarewithcreatestore = applyMiddleware(thunkMiddleware)(
      createStore
    );

    const reduxStore = applymiddlewarewithcreatestore(appReducer);
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
