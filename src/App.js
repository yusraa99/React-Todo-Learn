import React, { Component } from 'react'
import './style.css';
// import Todo from './components/Todo';
// import Header from './components/Header';
// import Text from './components/Text'
// import Social from './components/Social';
import Team from './components2/Team'
import Header from './components2/Header'

class App extends Component {
  render() {
    return (
      <div className='container'>
        {/* <Header /> */}
        {/* <Text/>
        <Social/> */}
        <Header/>
        <Team />


      </div>
    );
  }
}
export default App;
