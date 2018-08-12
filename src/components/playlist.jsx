import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faReply, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faReply);

export const Reply = () => (
    <div className='playListIcon'>
        <FontAwesomeIcon icon="reply" />
    </div>
);

library.add(faShareAlt);

export const Share = () => (
        <FontAwesomeIcon icon="share-alt" />
);

library.add(faHeart);

export const Favourite = () => (
        <FontAwesomeIcon icon="heart" />
);

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

export class Playlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            musicList: []
        }
    }

    componentDidMount = () => {
        this.setState ({
            musicList: arrayOfMusic
        })
    };

    render() {
        let listOfMusic = this.state.musicList.map(music => {
           return (
               <li className='description' key={music.title+music.artist+music.duration}>
                   <div className="musicTitle">
                       <div className='artist'>
                       {music.duration} | {music.artist}
                       <p className='music'>{music.title}</p>
                       </div>
                       <div className="playListIcon">
                       <Share/>
                       <Favourite/>
                   </div>
                   </div>
               </li>
           )
        });
        return (
            <div className='playList'>
                <div className='nav'>
                    <button className='btn' onClick={this.props.onArrowClick}><Reply/></button>
                    <h1 className='title'>Playlist</h1>
                </div>
                <ul className='list'>
                    {listOfMusic}
                    </ul>
            </div>
        )
    }
}

export default Playlist;