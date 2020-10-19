import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App.js';
import * as serviceWorker from './serviceWorker';

import {addPost} from './redux/Redux';
import {BrowserRouter} from "react-router-dom";





export let renderTree = (state) =>{
  ReactDOM.render(
    <BrowserRouter>
      <App  state={state} addPost={addPost}/>
      </BrowserRouter>, document.getElementById('root')
  );
}

