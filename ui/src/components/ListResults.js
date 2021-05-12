import React, { Component } from 'react';
import './css/App.css';
import './css/Buttons.css';

class ListResults extends Component { 
    state = {
        list: ["","", "", "", ""],
        tmpDataBase: ["apple","orange", "kiwi", "blood-orange", "crab-apple", "PINEAPPLE"],
    }
    topResults(searchTerm){
        return "test";
    }
    render(){
        return(
            <dl className="ResultButton">
                { this.state.tmpDataBase.map((head_word) => (
                    <dt key={head_word}>
                        <p>
                            {head_word}
                        </p>
                    </dt>
                )) }
            </dl>
        )
    }
}

export default ListResults; 
