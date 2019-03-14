import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';

import createSagaMiddleware from 'redux-saga';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import ResumeContainer from './containers/Resume/ResumeContainer';
import ListingContainer from './containers/Resume/ListingContainer';
import reducers from './reducers';
import rootSaga from  './sagas';


import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import ReduxToastr from 'react-redux-toastr'

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

const routeMiddleware = routerMiddleware(history);

const middleware = [sagaMiddleware, routeMiddleware];

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
)

let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

const AppRoutes = () =>
  <Provider store={store}>
    <div>
    <ConnectedRouter history={history}>
      <Switch>
      <Route exact path="/" component={ResumeContainer}/>
      <Route  path="/view" component={ListingContainer}/>
  
        
      </Switch>
    </ConnectedRouter>
    <ReduxToastr
      timeOut={5000}
      newestOnTop={true}
      preventDuplicates
      position="bottom-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar/>
    </div>
  </Provider>
export default AppRoutes