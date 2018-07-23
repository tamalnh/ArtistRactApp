import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ArtistList extends Component {

    list = (props) => {
        let allArtists = props.artists;
        
        
        if(allArtists){
            return allArtists.map((artist) => {
                const style = {
                    background: `url('/images/covers/${artist.cover}.jpg') no-repeat`
                }
                return(
                    <Link 
                        key={artist.id} 
                        to={`/artist/${artist.id}`} 
                        className="artist-item"
                        style={style}
                    >

                        <div>
                            {artist.name}
                        </div>

                     </Link>
                )
            })
        }
    }

    render(){
        
        return(
            <div className="artist-list">
                <h4>Browse the artists</h4>
                { this.list(this.props) }
            </div>
        )
    }
}

export default ArtistList;
