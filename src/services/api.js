import React from 'react-native';
import axios from 'axios';

export const apiCountryName = axios.create({
     // baseURL: 'https://restcountries.eu/rest/v2/'
     baseURL: 'http://api.worldbank.org/v2/'
})

export const apiNews = axios.create ({
     baseURL: 'https://newsapi.org/v2/'
})

export const apiKey = 'ba12165ef0724dfbaddf10917616de60';