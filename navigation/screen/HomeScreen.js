import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, ImageBackground } from 'react-native';

export default function HomeScreen({}){
    return (
        <View style={styles.container}>
          <Text style={styles.text}>W E L C O M E</Text>
          <Text style={[styles.text, { color: 'blue' }]}>Joanne</Text>
          <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      // fontFamily: 'Arcade',
      fontSize: 24,
      fontWeight: 'bold',
      color: 'red',
    },
});