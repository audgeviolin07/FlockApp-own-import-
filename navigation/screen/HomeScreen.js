import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import birdFlying from '/Users/adriannapinzariu/Documents/FlockApp/navigation/screen/bird-flying.gif'


export default function HomeScreen({}){
  return (
      <View style={styles.container}>
        <Image
          source={{ uri: '/Users/adriannapinzariu/Documents/FlockApp/navigation/screen/_ (2).jpeg' }}
          style={{ width: 400, height: 800 }}
        />
        <Image
        source={{ uri: '/Users/adriannapinzariu/Documents/FlockApp/navigation/screen/pixel-speech-bubble (5).png' }}
        style={{ position: 'absolute', top: 75, width: 250, height: 155}}
      />
       <Image
            source={birdFlying}
            style={{ position: 'absolute', width: 100, height: 100 }}
          />
        <StatusBar style="auto" />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  text: {
    fontFamily: 'Pixeled',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});
