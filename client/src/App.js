import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './Components/AppNavbar';
import ShoppingList from './Components/ShoppingList';
import {Provider} from 'react-redux'
import store from './store'
import ItemModal from './Components/ItemModal';
import {Container} from 'reactstrap'
import { loadUser } from './actions/authActions';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar></AppNavbar>
        <Container>
          <ItemModal></ItemModal>
          <ShoppingList></ShoppingList>
        </Container>
    </div>
    </Provider>
  );
}
}

export default App;
