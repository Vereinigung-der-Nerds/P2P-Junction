import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Splash from './screens/Splash';


const App = () => {

  return (
    <View style={styles.container}>
      <Splash />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray', 
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
  });

export default App; 