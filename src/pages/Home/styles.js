import { StyleSheet } from 'react-native';

export default StyleSheet.create({
     container: {
          flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center'
     },


     contentCountry: {
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom: 27,
          paddingHorizontal: 20
     },

     textCountries: {
          fontSize: 17,
          color: '#737380'
     },

     pickerContent: {
          width: '45%',
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#B8B8B8',
          borderRadius: 14,
          height: 45,
          paddingHorizontal: 5,
          justifyContent: 'center'
     },

     listCountries: {
          color: '#737380'
     },



     categoriesContainer: {
          marginBottom: 17,
          paddingLeft: 15
     },

     btnCategory: {
          backgroundColor: '#770C0C',
          paddingVertical: 10,
          justifyContent: 'center',
          paddingHorizontal: 17,
          marginHorizontal: 4,
          borderRadius: 20
     },

     textBtnCategory: {
          color: '#fff',
          opacity: 0.8,
          textTransform: 'uppercase',
          fontSize: 14,
          letterSpacing: 1
     },



     headline: {
          height: 280,
          width: 210,
          marginHorizontal: 7,
          borderRadius: 21,
          resizeMode: 'cover',
          justifyContent: 'flex-end',
          padding: 15
     },

     auxTitleHeadline: {
          backgroundColor: '#000',
          height: '100%',
          width: '100%'
          // opacity: 0.1,

     },

     titleHeadline: {
          color: '#fff',
          fontSize: 17,
     },

     headlinesContainer: {
          marginBottom: 30
     },


     headerLastestNews: {
          marginHorizontal: 24,
          marginBottom: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center'
     },

     titleHeaderLastestNews: {
          fontSize: 24
     },

     textSeeMore: {
          fontSize: 12,
          color: '#848484'
     },

     lastestNewsContainer: {
          marginHorizontal: 20
     },

     lastestNews: {
          justifyContent: 'center',
          flexDirection: 'row',
          marginBottom: 15
          // alignItems: 'center'
     },

     imgLastestNews: {
          width: 90,
          height: 90,
          borderRadius: 10,
          marginRight: 10
     },

     textsLastestNews: {
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginVertical: 5
     },

     titleLastestNews: {
          fontSize: 17,
          // textAlign: 'center',
          width: 230,
          alignSelf: 'center',
          padding: 0
     },

     infoLastestNews: {
          textTransform: 'uppercase',
          fontSize: 11,
          color: '#848484'
     }



})