import React, { Component } from 'react';
import './css/App.css';
import './css/Buttons.css';

class QueryResult extends Component { 
    state = {
        list: ["","", "", "", ""],
        tmpDataBase: ["apple","orange", "kiwi", "blood-orange", "crab-apple"],
    }
    topResults(searchTerm){
        return "test";
    }
    render(){
        return(
            <div className="App">
                <div className="ResultButton">
                    <p>
                        { this.state.tmpDataBase[0] }
                    </p>
                </div>
                <div className="ResultButton">
                    <p>
                        { this.state.tmpDataBase[1] }
                    </p>
                </div>
                <div className="ResultButton">
                    <p>
                        { this.state.tmpDataBase[2] }
                    </p>
                </div>
                <div className="ResultButton">
                    <p>
                        { this.state.tmpDataBase[3] }
                    </p>
                </div>
                <div className="ResultButton">
                    <p>
                        { this.state.tmpDataBase[4] }
                    </p>
                </div>
            </div>
        )
    }
}

export default QueryResult; 
