import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/Header';
import ItemCreator from './components/ItemCreator';
import ItemsList from './components/ItemsList';
import './app.css';

const store = configureStore();

class App extends Component {

  constructor(props) {
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      isActive: false
    };
  }
    
  addActiveClass(){
    const currentState = this.state.isActive;
    this.setState({ isActive: !currentState});

    var elements = document.getElementsByClassName('Complete')
    if (this.state.isActive===false) {
      for (var i = 0; i < elements.length; i++){
          elements[i].style.display = 'none';
      }
    } else {
      for (var j = 0; j < elements.length; j++){
          elements[i].style.display = 'block';
      }
    }

  };

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <div>
            <ItemCreator />
            <ItemsList />
          </div>
          <span onClick={this.addActiveClass}>{this.state.isActive ? 'Show Completed Items':'Hide Completed Items' }</span><br/>
        </div>
      </Provider>
    );
  }
}

export default App;
