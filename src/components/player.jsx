import React from 'react';
import Content from './player-content.jsx';

export class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className='player'>
                <Content/>
            </div>
        )
    }
}

export default Player;