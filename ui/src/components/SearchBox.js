import React, { Component } from 'react';
import './css/App.css';
import './css/Buttons.css';
import ListResults from './ListResults'

class SearchBox extends Component {
    state = {
        textValue: this.props.initialText,
        tmpWord: "",
    }
    handleTextChange(newText){
        this.setState(state => ({
            ...state,
            textValue: newText
        }))
    }
    search(text){
        this.setState(state => ({
            ...state,
            tmpWord: text/*QueryResult.topresults(this.state.tmpWord)*/
        }))
    }
    render(){
        return (
            <div className="App">
                <textarea
                    value={ this.state.textValue }
                    onChange={ (event) => this.handleTextChange(event.target.value) }
                />
                <div>
                    <div className="SearchButton">
                        <p onClick={() => this.search(this.state.textValue)}>
                            I'm a button
                        </p>
                    </div>
                    <p>
                        {this.state.tmpWord}
                    </p>
                    <ListResults
                    />
                </div>
            </div>
        );
    }
}

export default SearchBox;
