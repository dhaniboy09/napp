import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE = 'https://newsapi.org/v1/articles?source';

/**
 * Gets all sources from NEWSAPI
 * @param  {function} callback
 * @return {JSON Object} 
 */
export function getSources(callback){
	const url = "https://newsapi.org/v1/sources?language=en";
	return axios.get(url).then((response) => callback (response.data.sources))
}

/**
 * Gets all articles from NEWSAPI
 * @param {String} sourceName
 * @param {String} sortType
 * @param {function} callback
 * @return {JSON Object} 
 */

export function displayArticles(sourceName,sortType,callback){
	const URL = `${BASE}=${sourceName}&sortBy=${sortType}&apiKey=${API_KEY}`;
	return axios.get(URL).then((response) => callback(response.data.articles))
	.catch(function (error) {
    if (error.response) {
       return callback(error.response.status);
    } else if (error.request) {
       return callback(error.request);
    } 
  });	
}

