import React, { Component } from 'react';
import './css/App.css';

class SearchBox extends Component {
        render(){ 
  return (
    <div className="App">
          <textarea
          value={ this.props.passValue }
          />
    </div>
  );
        }
}

export default SearchBox;
