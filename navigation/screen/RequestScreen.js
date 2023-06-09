
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { FontAwesome } from 'react-native-vector-icons';
import * as Font from 'expo-font';
import {TextInput, Button, Alert} from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import geoBack from './geoBack.png';
import requestButton from './reqButton.png'
import requestBubble from './requestBubble.png'
import yes from './yes.png'
import no from './no.png'

export default function App() {
  
 const [location, setLocation] = useState();
 const [address, setAddress] = useState();


 Location.setGoogleApiKey("AIzaSyD5GUOMMrDY5Ml8JOQ5j7z7p9f8GaGCDBg");


 useEffect(() => { 
   const getPermissions = async () => {
     let { status } = await Location.requestForegroundPermissionsAsync();
     if (status !== 'granted') {
       console.log("Please grant location permissions");
       return;
     };
     let currentLocation = await Location.getCurrentPositionAsync({});
     setLocation(currentLocation);
     console.log("Location:");
     console.log(currentLocation);
   };
   getPermissions();
 }, []);


 const geocode = async () => {
   const geocodedLocation = await Location.geocodeAsync(address);
   console.log("Geocoded Address:");
   console.log(geocodedLocation);
 };


 const reverseGeocode = async () => {
   const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
     longitude: location.coords.longitude,
     latitude: location.coords.latitude
   });


   console.log("Reverse Geocoded:");
   console.log(reverseGeocodedAddress);
 };
 const isBackgroundRed = true;


 return (
   <View style={styles.container}>
     <Image
          source={geoBack}
          style={{ width: '100%', height: '175%', position: 'absolute', top: -100, left: 0, bottom: 0, right: 0, zIndex: -1 }}

        />
        
    
     <TextInput placeholder='WHERE AND WHERE ARE YOU GOING?' value={address} onChangeText={setAddress} style={styles.text}/>
     <Button title="How to start?" onPress={() => Alert.alert('Press the Send Location button to send your location')}/>
     <Button title="Send Location" onPress={reverseGeocode} style={{ zIndex: 2 }}
     />


      <Image
          source={requestButton}
          style={{ width: '100%', height: '45%', position: 'absolute', top: 148, zIndex: -1 }}
        />

      <Image
          source={requestBubble}
          style={{ width: '75%', height: '27%', position: 'absolute', top: 415, zIndex: -1 }}
        />
        <Image
          source={yes}
          style={{ width: '25%', height: '20%', position: 'absolute', right: 20, top: 500, zIndex: -1 }}
        />
        <Image
          source={no}
          style={{ width: '25%', height: '20%', position: 'absolute', left: 20, top: 500, zIndex: -1 }}
        />
    
     <StatusBar style="auto" />
   </View>
 );
}




const styles = StyleSheet.create({
 container: {
   flex: 0.75,
   alignItems: 'center',
   justifyContent: 'center',
 },
 text: {
   textAlign: 'center',
   fontSize: 10,
   fontFamily: 'Pixel',
 },
});


const loadFontsAsync = async () => {
  await Font.loadAsync({
    'Righteous-Regular': require('../../assets/fonts/Righteous-Regular.ttf'),
    'Nintendo': require('../../assets/fonts/RoSpritendoSemiboldBeta-vmVwZ.otf'),
    'superMario': require('../../assets/fonts/SuperMarioBros-ov7d.ttf'),
    'Pixel': require('../../assets/fonts/Pixeled.ttf'),
  });
};

loadFontsAsync();

