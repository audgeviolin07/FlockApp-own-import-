import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet } from 'react-native';


const AuthScreen = ({ onButtonClick }) => {
  const handlePress = () => {
    onButtonClick();
  };


  return (
    <View style={{ paddingTop: 50 }}>
      <Text>Welcome to the App!</Text>
      <StatusBar style="auto" />
      <Button title="Get Started With Two-Factor Authentication" onPress={handlePress} />
    </View>
  );
};

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

export default AuthScreen;