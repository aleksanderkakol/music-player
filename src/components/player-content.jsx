import React from 'react';
import Controller from './controller.jsx'
import Controls from './music-control.jsx'
import Playlist from './playlist.jsx'

export class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playList: false
        }
    }

    handleMenuClick = () => {
        this.setState ({
            playList: true
        });
        console.log(this.state.playList)
    };

    handleBackClick = () => {
        this.setState ({
            playList: false
        });
        console.log(this.state.playList)
    };

    render() {
        let player = <div className='player-content'>
            <Controller onMenuClick={this.handleMenuClick} />
            <Controls/>
        </div>;
        return (
            !this.state.playList?player:<Playlist onArrowClick={this.handleBackClick}/>
        )
    }
}

export default Content;