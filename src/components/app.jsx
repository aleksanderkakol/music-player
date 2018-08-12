import React from 'react';
import ReactDOM from 'react-dom';
require('../scss/main.scss');
import Player from './player.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className='main'>
                <Player/>
            </div>
        )
    }
}
document.addEventListener("DOMContentLoaded", function(){
    ReactDOM.render(
        <App />,
        document.querySelector('#app')
    )
});
