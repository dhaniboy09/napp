import * as newsAPI from '../utils/newsAPI';
import Dispatcher from '../dispatcher/AppDispatcher';
import newsConstants from '../constants/newsConstants';

/**
  * This function gets a full list of sources from the NewsAPI
  */
export function getSources() {
	return newsAPI.getSources((sourceList) => {
		Dispatcher.dispatch({
			actionType:newsConstants.NEWS_SOURCES,
			sourceList: sourceList
		});
	});
}

/**
  * This function gets articles based on the Source Name and the
  * sort type. Sort Type could either be Top or Latest
  * @param {string} sourceName
  * @param {string} sortType
  */
export function getArticles(sourceName,sortType) {
        return newsAPI.displayArticles(sourceName,sortType,(articleList) => {
		Dispatcher.dispatch({
			actionType:newsConstants.NEWS_ARTICLES,
			articleList: articleList
		});
	});
   
}

