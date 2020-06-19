import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default function News() {

     const route = useRoute();
     const img = route.params.img;
     const title = route.params.title;
     const info = route.params.info;

     return (
          <View style={{ flex: 1 }}>
               <ImageBackground style={styles.bannerContainer} source={img}></ImageBackground>

               <View style={styles.newsContainer}>
                    <View style={styles.header}>
                         <Text style={styles.category}>Business</Text>
                         <Text style={styles.title}>{title}</Text>
                         <Text style={styles.info}>{info}</Text>
                    </View>
                    
                    <Text style={styles.newsContent}>
                         How bad has it been for the U.S. stock market in the first three months of 2020?In a word, historic, but returns are almost certain to improve over the longer term despite the current pain, if history is any guide.Indeed, it has been punishing for investors, … [+4566 chars]
                    </Text>

                    <View>
                         <TouchableOpacity>
                              <Text>READ MORE</Text>
                         </TouchableOpacity>
                    </View>
                    
               </View>
          </View>
     )
}

