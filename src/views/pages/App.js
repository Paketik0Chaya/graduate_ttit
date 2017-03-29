import React, {Component} from 'react';
import Header from '../../views/component/header';
import ReactDOM from 'react-dom';

class App extends Component {
    render(){
        return (
            <div>
                <Header/>
            </div>
        )
    }
}

ReactDOM.render()(
    <App/>, document.getElementById('root')
);