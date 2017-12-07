// Actions

import * as types from './mutation-types'

/**
 * flickrAPIから画像情報を取得
 *
 * @param { String } query ユーザが入力したキーワード
 * @return { Object }
 *
 */
function getPhotos (query) {
  return fetch(`https://api.flickr.com/services/rest?method=flickr.photos.search&per_page=18&format=json&nojsoncallback=1&text=${query}&api_key=6708f15f09cc822b9853f79d8161ea02`)
    .then(res => res.json())
}

export default {
  [types.CHANGE_KEYWORD] ({ commit }, keyword) {
    commit(types.CHANGE_KEYWORD, keyword)
  },

  [types.SEARCH] ({ commit, state }) {
    getPhotos(state.keyword)
      .then(data => {
        commit(types.SEARCH, data.photos.photo)
      })
  },

  [types.UPDATE_FAVORITES] ({ commit }, favorite) {
    commit(types.UPDATE_FAVORITES, favorite)
  }
}
