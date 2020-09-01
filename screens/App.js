import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import TrackPlayer from 'react-native-track-player';


const data = [
  {
    "id": "1111",
    "url": "http://www.noiseaddicts.com/samples_1w72b820/4048.mp3",
    "title": "Longing",
    "artist": "David Chavez",
    "artwork": "https://s-media-cache-ak0.pinimg.com/originals/2f/5a/d6/2f5ad60b12d94bebe8b82afbc2b2cd0c.jpg"
  },
  {
    "id": "2222",
    "url": "http://www.noiseaddicts.com/samples_1w72b820/2558.mp3",
    "title": "Soul Searching (Demo)",
    "artist": "David Chavez",
    "artwork": "https://cdn1.player.fm/images/2082067/series/a6T0LNRk02vnyWDy/512.jpg"
  },
  {
    "id": "3333",
    "url": "http://www.noiseaddicts.com/samples_1w72b820/1453.mp3",
    "title": "Lullaby (Demo)",
    "artist": "David Chavez",
    "artwork": "https://www.howwe.biz/uploads/songcover/howwebiz_bc5afadada79dd680e4a35c441f523d2_1437126317_cover.jpg"
  },
  {
    "id": "4444",
    "url": "https://www.sample-videos.com/audio/mp3/wave.mp3",
    "title": "Rhythm City (Demo)",
    "artist": "David Chavez",
    "artwork": "https://www.dx-revision.com/wp-content/uploads/AltMusicPack.png"
  },
  {
    'id': '1',
    'url': 'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
    'type': 'default',
    'title': 'My Title',
    'album': 'My Album',
    'artist': 'Rohan Bhatia',
    'artwork': 'https://picsum.photos/100',
  }
]
//function to initialize the Track Player
const trackPlayerInit = async () => {
  await TrackPlayer.setupPlayer();

  await TrackPlayer.add(data);
  return true;
};

const App = () => {
  //state to manage whether track player is initialized or not
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  //initialize the TrackPlayer when the App component is mounted
  useEffect(() => {
    const startPlayer = async () => {
      let isInit =  await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
    }
    startPlayer();
  }, []);

//start playing the TrackPlayer when the button is pressed
  const onButtonPressed = () => {
    if (!isPlaying) {
      TrackPlayer.play();
      setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
  };


  const [count, setCount] = useState(0);
  // const onPress = () => setCount(prevCount => prevCount + 1);
  // const reStart = () =>setCount(prevCount => 0);
  return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={styles.imgContainer}>
          <TouchableOpacity onPress={()=>setCount(count+1)} style={styles.imgClickArea} >
            <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.imgArea}>🖱️
            </Animatable.Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.countContainer}>
          <Text style = {{fontSize: 30}}>How many times you click</Text>
          <Text style = {{fontSize: 80}}>{count}</Text>
          <TouchableOpacity onPress={()=>setCount(0)}>
            <Text style = {[styles.restartContainer,{fontSize: 30}]}>RESTART</Text>
          </TouchableOpacity>
          <Button
              title={isPlaying ? 'Pause' : 'Play'}
              onPress={onButtonPressed}
              disabled={!isTrackPlayerInit}
          />
        </View>
      </View>
  )
};

const styles = StyleSheet.create({
  imgContainer:{
    flex: 2,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'powderblue',
  },
  imgClickArea:{
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor:'red',
    width:160,
    height:170,
  },
  imgArea:{
    fontSize: 150,
  },
  countContainer:{
    flex:3,
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'steelblue',
  },
  restartContainer:{
    backgroundColor:'red',
  },

});

export default App;
