
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import {TextInput, Button, Alert} from 'react-native';
import React from 'react';




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
     <TextInput placeholder='Where are you going, and when?:' value={address} onChangeText={setAddress} />
     <Button title="How to start?" onPress={() => Alert.alert('Press the Send Location button to send your location')} />
     <Button title="Send Location" onPress={reverseGeocode}
     />
   
     <StatusBar style="auto" />
   </View>
 );
}




const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 text: {
   textAlign: 'center',
   color: 'black',
   fontSize: 20,
   fontFamily: 'IBM Plex Mono Bold',
 },
});
