import React, {Component} from 'react';

import Banner from './Banner';
import ArtistList from './artistList'


const URL_ARTIST = 'http://localhost:4000/artists';

class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            artists: null
        }
    }

    componentDidMount(){
        fetch(URL_ARTIST, {
            method: 'GET',

        })
        .then(res => res.json())
        .then(data => {

           this.setState({
               artists: data
           })
            
        })
        .catch(err => console.log(err))
    }


    render(){
        return(
            <div className="home">
                <Banner/>

                <ArtistList artists={this.state.artists}/>
            </div>
        )
    }
}

export default Home;