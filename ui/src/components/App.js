import React, { Component } from 'react';
import './css/App.css';
import SearchBox from './SearchBox';

class App extends Component {
        render(){ 
  return (
    <div className="App">
      <header className="App-header">
          <SearchBox
          initialText="Welcome!"
          />
      </header>
    </div>
  );
        }
}

export default App;
