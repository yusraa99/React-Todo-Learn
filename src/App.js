import React, { Component } from 'react'
import './style.css';
// import Todo from './components/Todo';
import Header from './components/Header';
import Text from './components/Text'
import Social from './components/Social';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Text />
        <Social />
      </div>
    );
  }
}
export default App;
