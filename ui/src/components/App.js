import React, { Component } from 'react';
import './css/App.css';
import SearchBox from './SearchBox';

class App extends Component {
    render(){ 
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Work in progress: Dictionary webpage!
                    </p>
                    <p>
                        current test cases:
                    </p>
                    <div>
                        'h'/'he'/'hel'
                    </div>
                    <div>
                        'k'/'ki'
                    </div>
                    <div>
                        'w'/'wo'"
                    </div>
                    <SearchBox
                        initialText="Welcome!"
                    />
                </header>
            </div>
        );
    }
}

export default App;
