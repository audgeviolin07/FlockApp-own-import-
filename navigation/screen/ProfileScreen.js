import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

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
            <Text style={infoStyles.info}>Age: 18</Text>
        </View>

        <View style={infoStyles.info}>
            <FontAwesome name="graduation-cap" size={24} color="rgb(103, 79, 110)" style={infoStyles.icon} />
            <Text style={infoStyles.info}>Major: Data Science</Text>
        </View>
        <View style={infoStyles.info}>
            <FontAwesome name="id-card" size={24} color="rgb(103, 79, 110)" style={infoStyles.icon} />
            <Text style={infoStyles.info}>ID number: 2****08</Text>
        </View>
        <View style={infoStyles.info}>
            <FontAwesome name="envelope" size={24} color="rgb(103, 79, 110)" style={infoStyles.icon} />
            <Text style={infoStyles.info}>Email: jlin123@depaul.edu</Text>
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
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 10,
      marginBottom: 30,
    },
    info: {
      flexDirection: 'row',
      fontSize: 20,
      textAlign: 'left',
      paddingLeft: 10,
      marginBottom: 8,
      color: 'rgb(87, 93, 110)',
    },
    icon: {
        marginRight: 8, // add this to add spacing between the icon and text
        paddingLeft: 30,
        width: 80,
        borderRadius: 15,
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

  
  export default ProfileScreen;
