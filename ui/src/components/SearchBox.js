import React, { Component } from 'react';
import './css/App.css';
import './css/Buttons.css';
import ListResults from './ListResults'

class SearchBox extends Component {
    state = {
        textValue: this.props.initialText,
        tmpWord: "",
        current_list:[],
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
            current_list: ["apple","orange", "kiwi", "blood-orange", "crab-apple", "PINEAPPLE"],
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
                    <ListResults
                        to_list={this.state.current_list}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBox;
