import React from 'react';
import Controller from './controller.jsx'
import Controls from './music-control.jsx'
import Playlist from './playlist.jsx'

let arrayOfMusic = [{
    'artist': "Icona Pop",
    'title': "Still Don't Know",
    'duration': "3:16"},
    {
        'artist': "Icona Pop",
        'title': "I Love It",
        'duration': "2:35"
    },
    {
        'artist': "Icona Pop",
        'title': "Girlfriend",
        'duration': "2:50"
    },
    {
        'artist': "Icona Pop",
        'title': "We Got The World",
        'duration': "3:07"
    },
    {
        'artist': "Icona Pop",
        'title': "Night Like This",
        'duration': "3:24"
    }];

export class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playList: false,
            name: 0,
            musicList: []
        }
    }

    componentWillMount = () => {
        this.setState ({
            musicList: arrayOfMusic
        })
    };

    handleMenuClick = () => {
        this.setState ({
            playList: true
        });
    };

    handleBackClick = () => {
        this.setState ({
            playList: false
        });
    };

    handleClick = (e) => {
        this.setState ({
            playList: false,
            name: e.currentTarget.id
        });
    };

    handlePrevious = () => {
        if (this.state.name <= 0) {
            this.setState ({
                name: this.state.musicList.length - 1
            });
        } else {
            this.setState ({
                name: this.state.name - 1
            })
        }
    };

    handleNext = () => {
        if (this.state.name >= this.state.musicList.length - 1) {
            this.setState ({
                name: 0
            });
        } else {
            this.setState ({
                name: this.state.name + 1
            })
        }
    };

    render() {

        let player = <div className='player-content'>
            <Controller musicList={this.state.musicList} i={this.state.name} onMenuClick={this.handleMenuClick} />
            <Controls prev={this.handlePrevious} next={this.handleNext}/>
        </div>;
        return (
            !this.state.playList?player:<Playlist onPlayListClick={this.handleClick} musicList={this.state.musicList} onArrowClick={this.handleBackClick}/>
        )
    }
}

export default Content;