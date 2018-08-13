import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faPause, faPlay, faStepBackward, faStepForward, faHeart } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(faShareAlt);

export const Share = () => (
    <button className='fontAwesomeIcon socialIcon'>
        <FontAwesomeIcon icon="share-alt" />
    </button>
);

library.add(faHeart);

export const Favourite = () => (
        <FontAwesomeIcon icon="heart" />
);

library.add(far);

export const Heart = () => (
        <FontAwesomeIcon icon={["far", "heart"]} />
);

library.add(faStepForward);

export const StepForward = () => (
        <FontAwesomeIcon icon="step-forward" />
);

library.add(faStepBackward);

export const StepBackward = () => (
        <FontAwesomeIcon icon="step-backward" />
);

library.add(faPause);

export const Pause = () => (
    <div className='fontAwesomeIcon startMusic'>
        <FontAwesomeIcon icon="pause" />
    </div>
);

library.add(faPlay);

export const Play = () => (
        <div className='fontAwesomeIcon startMusic'>
            <FontAwesomeIcon icon="play" />
        </div>
);

export class Controls extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 30,
            play: false,
            favourite: false
        }
    }

    handleChange = (e) => {
        this.setState ({
            value: e.target.value
        });
    };

    handlePlay = () => {
        this.setState({
            play: !this.state.play
        });
    };

    handleFav = () => {
        this.setState({
            favourite: !this.state.favourite
        });
    };


    render() {
        let startPlay = this.state.play?<Pause/>:<Play/>;
        let favourite = this.state.favourite?<Favourite/>:<Heart/>;
        return (
            <div className='musicControl'>
                <div className='track'/>
                <input type='range' min='0' max='100' value={this.state.value} onChange={this.handleChange} step='1' className='volumeControl'/>
                <div className='volumeColor' style={{width: 100-this.state.value+'%'}}/>
                <div className='musicButtons'>
                    <Share/>
                    <div className="play">
                        <button onClick={this.props.prev} className='fontAwesomeIcon stepBack'>
                            <StepBackward/>
                        </button>

                        <button onClick={this.handlePlay} className='checkbox'>
                            {startPlay}
                        </button>
                        <button onClick={this.props.next} className='fontAwesomeIcon stepForward'>
                            <StepForward/>
                        </button>
                    </div>
                    <button className='fontAwesomeIcon unFavHeart favHeart' onClick={this.handleFav}>
                        {favourite}
                    </button>
                </div>
            </div>
        )
    }
}

export default Controls;