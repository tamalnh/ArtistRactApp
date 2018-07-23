import React, {Component} from 'react';

import Header from './Header';
import AlbumList from './AlbumList';
const REQ_URL = `http://localhost:4000/artists`

class Artist extends Component{
    constructor(props){
        super(props);

        this.state = {
            artist: ''
        }
    }

    componentDidMount(){
        let id = this.props.match.params.artistID;
        

        fetch(`${REQ_URL}/${id}`, { method: 'GET' })
        .then(res => res.json())
        .then(data => {
            this.setState({
                artist: data
            })
                        
        })
        .catch(err => console.log(`Error found: ${err}`))
    }

    render(){
        return(
            <div className="artist">
                <Header /> 
                <div className="artist-bio">
                    <div className="avatar">
                        <span style={ {background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
                    </div>

                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                    </div>
                    <div className="bio-text">
                        {this.state.artist.bio}
                    </div>
                    
                    <AlbumList albums={this.state.artist.albums} />
                </div>
            </div>
        )
    }
}

export default Artist;