import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

//components
import Home from './components/Home'
import Artist from './components/Artist'

class App extends Component{

    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/artist/:artistID" component={Artist}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


