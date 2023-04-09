import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import birdFlying from './bird-flying.gif'
import pixelBubble from './pixel-speech-bubble.png'
import background from './background.jpeg'


export default function HomeScreen({}){
  return (
      <View style={styles.container}>
        <Image
          source={background}
          style={{ width: 400, height: 800}}
        />
        <Image
        source={pixelBubble}
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
