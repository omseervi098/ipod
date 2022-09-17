import React from "react";
import firebase from 'firebase/compat/app';
import PlaySong from './PlaySong';
import 'firebase/compat/firestore';
class Songs extends React.Component{
    constructor(){
        super();
        this.state={
            all_songs_list:[],
            loading:true
        }
        this.db=firebase.firestore();
    }
    componentDidMount(){
        this.db.collection('songs').onSnapshot((snapshot)=>{
            let all_songs_list=[];
            //download all songs using getDownloadURL()
        
            snapshot.forEach((doc)=>{

                
                all_songs_list.push(doc.data());
            })
            this.setState({
                all_songs_list,
                loading:false
            })
        })
    }
    render(){
        if(this.props.songIdx!==-1){
            
            return <PlaySong 
            songidx={this.props.songIdx}
            Songs={this.state.all_songs_list}
            currentlyOnMusicPage={this.props.currentlyOnMusicPage}
            />
        }
        return (this.state.loading?
            <div className="loading">
                <h1>Loading..</h1>
                <div className="loader"></div>
                <p>This data is fetched from firestore</p>
            </div>
            :
            <div className="all-songs">
                {this.state.all_songs_list.map((song,idx)=>{
                    
                    return (
                        <div className={this.props.current_music_selected===idx?'selected':''}>
                            {song.name}
                        </div>                    
                    )
                })}
                <div className="movebackward">
                    Use <i className="fas fa-arrow-left"></i> to move backward
                </div>
            </div>
        );
    }
}
export default Songs;