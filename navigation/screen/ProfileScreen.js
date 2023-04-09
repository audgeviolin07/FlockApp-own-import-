import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import * as Font from 'expo-font';

import { useEffect } from 'react';

const ProfileScreen = () => {
    return (
      <View style={backgroundStyles.container}>
        <Image
            source={require('/Users/joannelin/FlockApp/headshot.png')}
            style={infoStyles.profileImage}
        />
        <Text style={infoStyles.name}>Joanne Lin</Text>
        <View style={infoStyles.info}>
            <FontAwesome name="calendar" size={24} color="rgb(103, 79, 110)" style={infoStyles.icon} />
            <Text style={infoStyles.info}>AGE: 18</Text>
        </View>

        <View style={infoStyles.info}>
            <FontAwesome name="graduation-cap" size={24} color="rgb(103, 79, 110)" style={infoStyles.icon} />
            <Text style={infoStyles.info}>MAJOR: DATA SCIENCE</Text>
        </View>
        <View style={infoStyles.info}>
            <FontAwesome name="id-card" size={24} color="rgb(103, 79, 110)" style={infoStyles.icon} />
            <Text style={infoStyles.info}>ID NUMBER: 2****08</Text>
        </View>
        <View style={infoStyles.info}>
            <FontAwesome name="envelope" size={24} color="rgb(103, 79, 110)" style={infoStyles.icon} />
            <Text style={infoStyles.info}>EMAIL: JLIN123@DEPAUL.EDU</Text>
        </View>
      </View>
    );
  };
  
  const backgroundStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      paddingTop: 15,
    },
    header: {
      
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        marginBottom: 16,
        
    },
    
  });
  
  const infoStyles = StyleSheet.create({
    name: {
      fontFamily: 'Pixel',
      fontSize: 25,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 10,
      marginBottom: 30,
    },
    info: {
      flexDirection: 'row',
      fontFamily: 'Pixel',
      fontSize: 12,
      textAlign: 'left',
      paddingLeft: 2,
      marginBottom: 8,
      color: 'white',
    },
    icon: {
        marginRight: 8, // add this to add spacing between the icon and text
        paddingLeft: 30,
        width: 60,
        borderRadius: 15,
        color: 'white',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center',
      },
  });

  
    const loadFontsAsync = async () => {
      await Font.loadAsync({
        'Righteous-Regular': require('/Users/joannelin/FlockApp/assets/fonts/Righteous-Regular.ttf'),
        'Nintendo': require('/Users/joannelin/FlockApp/assets/fonts/RoSpritendoSemiboldBeta-vmVwZ.otf'),
        'superMario': require('/Users/joannelin/FlockApp/assets/fonts/SuperMarioBros-ov7d.ttf'),
        'Pixel': require('/Users/joannelin/FlockApp/assets/fonts/Pixeled.ttf'),
      });
    };

    loadFontsAsync();


  export default ProfileScreen;
