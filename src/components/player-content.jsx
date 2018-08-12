import React from 'react';
import Controller from './controller.jsx'

export class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className='player-content'>
                <Controller/>
            </div>
        )
    }
}

export default Content;