import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ProductList from './components/ProductList'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      
      <div>
       <ProductList/>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
