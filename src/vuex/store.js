import Vue from 'vue'
import Vuex from 'vuex'
import { CHANGE_KEYWORD, SEARCH, UPDATE_FAVORITES } from './mutation-types'

Vue.use(Vuex)

function getPhotos (query) {
  return fetch(`https://api.flickr.com/services/rest?method=flickr.photos.search&per_page=18&format=json&nojsoncallback=1&text=${query}&api_key=6708f15f09cc822b9853f79d8161ea02`)
    .then(res => res.json())
}

function createFormatedPhotos (photos) {
  let formatedPhotos = []

  photos.forEach((v) => {
    const formatedPhoto = {
      id: v.id,
      title: v.title,
      url: `https://farm${v.farm}.staticflickr.com/${v.server}/${v.id}_${v.secret}.jpg`
    }

    formatedPhotos.push(formatedPhoto)
  })

  return formatedPhotos
}

function changeFavorites (favorites, favorite) {
  // 重複チェックを後で追加

  favorites.push(favorite)

  return favorites
}

/*
 *
 * State
 *
 * 状態
 *
 */
const state = {
  keyword: '',
  photos: [],
  favorites: []
}

/*
 *
 * Actions
 *
 * ユーザの操作 / APIとのやりとり
 *
 */
const actions = {
  [CHANGE_KEYWORD] ({ commit }, keyword) {
    commit(CHANGE_KEYWORD, keyword)
  },

  [SEARCH] ({ commit, state }) {
    getPhotos(state.keyword)
      .then(data => {
        commit(SEARCH, data.photos.photo)
      })
  },

  [UPDATE_FAVORITES] ({ commit }, favorite) {
    commit(UPDATE_FAVORITES, favorite)
  }
}

/*
 *
 * Getters
 *
 */
const getters = {
  photos: state => state.photos,
  favorite: state => state.favorites
}

/*
 *
 * Mutations
 *
 * 状態への変更処理
 *
 */
const mutations = {
  [CHANGE_KEYWORD] (state, keyword) {
    state.keyword = keyword
  },
  [SEARCH] (state, photos) {
    state.photos = createFormatedPhotos(photos)
  },
  [UPDATE_FAVORITES] (state, favorite) {
    state.favorites = changeFavorites(state.favorites, favorite)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
