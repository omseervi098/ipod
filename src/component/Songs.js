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
            //getting the data from firestore and putting it into state
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
            //if song index is not -1 then we are on we will play the song
            return <PlaySong 
            songidx={this.props.songIdx}
            Songs={this.state.all_songs_list}
            currentlyOnMusicPage={this.props.currentlyOnMusicPage}
            />
        }
        return (this.state.loading?
            <div className="loading">
                <h1 className="text-light">Loading...</h1>
                <div className="loader"></div>
                <p className="text-light">This data is fetched from firestore</p>
            </div>
            :
            <div className="all-songs ">
                {this.state.all_songs_list.map((song,idx)=>{
                    return (
                        <div key={idx} className={this.props.current_music_selected===idx?'song_selected':''}>
                            {song.name}
                        </div>                    
                    )
                })}
                <div className="movebackward bg-danger bg-gradient text-dark">
                   Use <i className="fas fa-backward"></i> and <i className="fas fa-forward"></i> to navigate
                </div>
            </div>
        );
    }
}
export default Songs;