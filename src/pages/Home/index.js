import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

     const navigation = useNavigation();

     function navigateToNews() {
          navigation.navigate('News');
     }

     return (
          <View style={styles.container}>
               <Text>Home</Text>
               <TouchableOpacity onPress={navigateToNews} style={styles.button}>
                    <Text>News</Text>
               </TouchableOpacity>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
     },
     button: {
          width: 80,
          height: 30,
          backgroundColor: '#a45',
          justifyContent: 'center',
          alignItems: 'center'
     }
})