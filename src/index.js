import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App.js';
import * as serviceWorker from './serviceWorker';


const messagesData = [
  { message: "Че каво?", id: 1 },
  { message: "привет , ну как то ттак, ничего очобенного", id: 2 },
  { message: "Ну давай . мног не давай", id: 3 },
  { message: "йоу", id: 4 },
  { message: "йоу", id: 5 },
  { message: "вроде работает", id: 6 }
]

const dialogData = [
  { name: "Вячеслав", id: 1 },
  { name: "Николай", id: 2 },
  { name: "Наталья", id: 3 },
  { name: "Василий", id: 4 },
  { name: "Екатерина", id: 5 },
  { name: "Петр", id: 6 },
  { name: "Светлана", id: 7 },
  { name: "Сергей", id: 8 }
]

const posts = [
  { id: 1, message: "ну вот как то так", like: 32 },
  { id: 2, message: "довольно не плохо получилось", like: 2 },
  { id: 2, message: "три поросенка", like: 10 },
  { id: 2, message: "во всем виноват Навальный", like: 175 }
]


ReactDOM.render(
  
    <App  messagesData={messagesData} dialogData={dialogData} posts={posts}/>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
