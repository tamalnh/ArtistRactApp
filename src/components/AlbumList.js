import React from 'react';
    
const AlbumList = (props) => {

    const showList = (props) => {
        if(props.albums){
            return props.albums.map((album, index) => {
                return(
                    <img key={index} src={`/images/albums/${album.cover}.jpg`}  alt={album.title}/>
                )
            })
        }
    }

        return(
            <div className="album-list">
               {showList(props)}
            </div>
        )
}

export default AlbumList;