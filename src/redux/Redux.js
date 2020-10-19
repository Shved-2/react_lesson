import {renderTree} from '../render';
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "ну вот как то так", like: 32 },
      { id: 2, message: "довольно не плохо получилось", like: 2 },
      { id: 3, message: "три поросенка", like: 10 },
      { id: 4, message: "во всем виноват Навальный", like: 175 }
    ]

  },
  messagesPage: {
    messagesData: [
      { message: "Че каво?", id: 1 },
      { message: "привет , ну как то ттак, ничего очобенного", id: 2 },
      { message: "Ну давай . мног не давай", id: 3 },
      { message: "йоу", id: 4 },
      { message: "йоу", id: 5 },
      { message: "вроде работает", id: 6 }
    ],

    dialogData: [
      { name: "Вячеслав", id: 1 },
      { name: "Николай", id: 2 },
      { name: "Наталья", id: 3 },
      { name: "Василий", id: 4 },
      { name: "Екатерина", id: 5 },
      { name: "Петр", id: 6 },
      { name: "Светлана", id: 7 },
      { name: "Сергей", id: 8 }
    ]
  }
}

export let addPost = ((postMessage)=>{
 

  let newPost ={
    id:5,
    message: (postMessage),
    like: 0
  }
  state.profilePage.posts.push(newPost);
  renderTree(state);
})




export default state;