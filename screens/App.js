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
  const onPress = () => setCount(prevCount => prevCount + 1);
  const reStart = () =>setCount(prevCount => 0);
  return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.sectionContainer}>
          <Text style={styles.welcomeText}>
            Welcome here my friend!
          </Text>

          <View style={styles.imgContainer}>
            <TouchableOpacity onPress={onPress}>
              <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.cell}>️
                🖱️
              </Animatable.Text>
              <Text style={{fontSize:20,}}>How many times you click</Text>
              <Text style={styles.countText}>{count}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={reStart}>
              <Text>click on me to restart.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
  )
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 50,
    paddingHorizontal: 24,
  },
  welcomeText: {
    fontSize:30,
    backgroundColor:'red',
  },
  imgContainer:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent: 'center',
  },
  cell:{
    marginTop:50,
    marginLeft:30,
    fontSize:100,
    height:150,
    width:150,
    alignItems:'center',
    justifyContent: 'center',
  },
  countText:{
    marginTop:50,
    marginLeft:75,
    fontSize:100,
    height:150,
    width:150,
    alignItems:'center',
    justifyContent: 'center',
  }

});

export default App;
