import React, { Component } from 'react';
import './css/App.css';

class SearchBox extends Component {
        state = {
                textValue: this.props.initialText
        }
        handleTextChange(newText){
                this.setState(state => ({
                            ...state,
                        textValue: newText
                }))
        }
        render(){ 
  return (
    <div className="App">
          <textarea
          value={ this.state.textValue }
          onChange={ (event) => this.handleTextChange(event.target.value) }
          />
    </div>
  );
        }
}

export default SearchBox;
