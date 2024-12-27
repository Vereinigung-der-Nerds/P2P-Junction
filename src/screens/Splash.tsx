import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { logo, plusicon } from '../assets/assets';
import styles from './SplashStyles'; 

const Splash = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Image 
                    source={{ uri: logo }} 
                    style={styles.logo}
                />
                <Text style={styles.ptext}>Connect to peer</Text>
                <Text style={styles.text}>Share your files with your friends, with the help of P2P connections.</Text>
                <TouchableOpacity
                    style={styles.plusContainer} 
                    onPress={() => { console.log('clicked') }} 
                >
                    <Image source={{ uri: plusicon }} style={styles.plusicon} />
                </TouchableOpacity>
            </View>
        </ScrollView>
        
    );
};

export default Splash;