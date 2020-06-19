import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Picker, FlatList, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import img from '../../assets/bitcoin.jpg'

export default function Home() {
     const navigation = useNavigation();
     const titleNews = 'Thee reality of confinement with a four-year-old - BBC Reel';
     const infoNews = 'BY JHON MIRROR | 3 MIN AGO';

     const categories = {
          data: [
               "All",
               "Health",
               "Business",
               "Entertainment",
               "Sports",
               "Technology",
               "Science",
          ]
     }

     function navigateToNews(image, title, info) {
          // title.persist();
          navigation.navigate('News', { image, title, info });
     }

     return (
          <ScrollView style={styles.container}>
               <View style={styles.contentCountry}>
                    <Text style={styles.textCountries}>What's happening on</Text>
                    <View style={styles.pickerContent}>
                         <Picker style={styles.listCountries}>
                              <Picker.Item label="World" value="world" />
                              <Picker.Item label="Brazil" value="br" />
                              <Picker.Item label="United States" value="us" />
                              {/* {contriesNames.map(contry => (
                                   <Picker.Item label={contry.name} value={contry.name} />
                              ))} */}
                         </Picker>
                    </View>
               </View>

               <View style={styles.categoriesContainer}>
                    <FlatList 
                         style={styles.categoriesList}
                         data={categories.data}
                         renderItem={({ item: category }) => (
                              <TouchableOpacity style={styles.btnCategory}>
                                   <Text style={styles.textBtnCategory}>{category}</Text>
                              </TouchableOpacity>
                         )}
                         keyExtractor={category => category}
                         horizontal
                         showsHorizontalScrollIndicator = {false}
                    />
               </View>

               <View style={styles.headlinesContainer}>
                    <FlatList 
                         style={styles.headlinesList}
                         data={categories.data}
                         renderItem={({ item: headline }) => (
                              <ImageBackground source={img} style={styles.headline}>
                                   {/* <View style={styles.auxTitleHeadline}></View> */}
                                   <Text style={styles.titleHeadline}>Dow is on track for its worst quarterly performance since 1987 — here’s how the stock market tends to perform after damaging quarters - MarketWatch"</Text>
                              </ImageBackground>

                         )}
                         keyExtractor={headline => headline}
                         horizontal
                         showsHorizontalScrollIndicator = {false}
                    />
               </View>

               <View style={styles.headerLastestNews}>
                    <Text style={styles.titleHeaderLastestNews}>Lastest News</Text>
                    <Text style={styles.textSeeMore}>See more</Text>
               </View>

               <View style={styles.lastestNewsContainer}>
                    <TouchableOpacity style={styles.lastestNews} onPress={() => navigateToNews(img, titleNews, infoNews)}>
                         <Image style={styles.imgLastestNews} source={img} onPress={() => navigateToNews(img, titleNews, infoNews)} />
                         <View style={styles.textsLastestNews}>
                              <Text style={styles.titleLastestNews}>{titleNews}</Text>
                              <Text style={styles.infoLastestNews}>{infoNews}</Text>
                         </View>
                    </TouchableOpacity>

               </View>
          </ScrollView>
     )
}

