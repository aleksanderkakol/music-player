import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faRandom);

export const Random = () => (
    <div className='navIcons'>
        <FontAwesomeIcon icon="random" />
    </div>
);

library.add(faRetweet);

export const Retweet = () => (
    <div className='navIcons'>
        <FontAwesomeIcon icon="retweet" />
    </div>
);

library.add(faRedoAlt);

export const RedoAlt = () => (
    <div className='navIcons'>
        <FontAwesomeIcon icon="redo-alt" />
    </div>
);

export class Controller extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='controller'>
                <div className='navbar'>
                    <Retweet/>
                    <Random/>
                    <RedoAlt/>
                    <div onClick={this.props.onMenuClick} id="menuHamburger">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <footer className='footer'>
                    <p className='artist'>{this.props.musicList[this.props.i].artist}</p>
                    <p className='song'>{this.props.musicList[this.props.i].title}</p>
                </footer>
            </div>
        )
    }
}

export default Controller;