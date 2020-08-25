import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import todoReducer from "./reducers/todoReducer";
import fbpostReducer from "./reducers/fbpostReducer";
import {Provider} from "react-redux";
import {createStore,combineReducers} from "redux";

const reducer = combineReducers({
  items:todoReducer,
  feed:fbpostReducer,
 
  })
  
  const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  ReactDOM.render(
  
  <Provider store={store}>
  <App/>
  </Provider>,
    document.getElementById("root")
    
    );


