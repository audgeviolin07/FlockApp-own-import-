import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Joanne Lin</Text>
        <Text style={styles.info}>Age: 18</Text>
        <Text style={styles.info}>Major: Data Science</Text>
        <Text style={styles.info}>Email: jlin123@depaul.edu</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      paddingTop: 15,
    },
    name: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
    },
    info: {
      justifyContent: 'center',
      fontSize: 20,
      textAlign: 'left',
      paddingLeft: 25,
      marginBottom: 8,
      
    },
  });
  

  
  export default ProfileScreen;
