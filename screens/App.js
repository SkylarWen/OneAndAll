import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const App = () => {
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
            <Text style = {[styles.restartContainer,{fontSize: 30}]}>click on me to restart.</Text>
          </TouchableOpacity>
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
