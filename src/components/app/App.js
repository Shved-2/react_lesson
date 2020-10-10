import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Profiles from './components/Profiles';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Profiles />
        
      </div>
    );
  }
}

export default App;
