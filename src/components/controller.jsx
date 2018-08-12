import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faRandom);

export const Random = () => (
    <div>
        <FontAwesomeIcon icon="random" />
    </div>
);

library.add(faRetweet);

export const Retweet = () => (
    <div>
        <FontAwesomeIcon icon="retweet" />
    </div>
);

library.add(faRedoAlt);

export const RedoAlt = () => (
    <div>
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
                <navbar className='navbar'>
                    <Retweet/>
                    <Random/>
                    <RedoAlt/>
                    <div id="menuHamburger">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </navbar>
                <footer className='footer'>
                    <p className='artist'>Wykonawca</p>
                    <p className='song'>Utwór</p>
                </footer>

            </div>
        )
    }
}

export default Controller;