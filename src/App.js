import React, {Fragment} from 'react';
import 'react-native-gesture-handler';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import logger from 'redux-logger';

import MainRouteConfig from './MainRouteConfig';
import MainReducer from './store/Reducers/MainReducer';
import {SafeAreaView} from 'react-native';

export const store = createStore(MainReducer, applyMiddleware(ReduxThunk));

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={{flex: 1}}>
      <Fragment>
        <MainRouteConfig />
      </Fragment>
    </SafeAreaView>
  </Provider>
);

export default App;
