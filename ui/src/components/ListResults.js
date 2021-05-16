import React, { Component } from 'react';
import './css/App.css';
import './css/Buttons.css';

class ListResults extends Component { 
    render(){
        return(
            <dl className="ResultButton">
                { this.props.to_list.map((head_word) => (
                    <dt key={head_word.word}>
                        <p>
                            {head_word.word}
                        </p>
                    </dt>
                )) }
            </dl>
        )
    }
}

export default ListResults; 
