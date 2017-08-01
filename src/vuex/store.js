import Vue from 'vue'
import Vuex from 'vuex'
import { CHANGE_KEYWORD, SEARCH, UPDATE_FAVORITES } from './mutation-types'

Vue.use(Vuex)

/**
 * flickrAPIから画像情報を取得
 *
 * @param query { String } ユーザが入力したキーワード
 * @return { Object }
 *
 */
function getPhotos (query) {
  return fetch(`https://api.flickr.com/services/rest?method=flickr.photos.search&per_page=18&format=json&nojsoncallback=1&text=${query}&api_key=6708f15f09cc822b9853f79d8161ea02`)
    .then(res => res.json())
}

/**
 * APIから取得した画像情報から必要なものだけを取り出す
 *
 * @param photos { Array } APIから取得した画像情報
 * @return { Array }
 *
 */
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

/**
 * 画像をお気に入りに追加
 *
 * @param favorites { Array } お気に入りに入っている画像情報
 * @param favorite { Object } ユーザが新たにお気に入りした画像情報
 * @return { Array }
 *
 */
function addFavorites (favorites, favorite) {
  // 重複チェックを後で追加

  favorites.push(favorite)

  return favorites
}

/**
 *
 * State
 * 状態
 *
 */
const state = {
  keyword: '',
  photos: [],
  favorites: []
}

/**
 *
 * Actions
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

/**
 *
 * Getters
 *
 */
const getters = {
  photos: state => state.photos,
  favorite: state => state.favorites
}

/**
 *
 * Mutations
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
    state.favorites = addFavorites(state.favorites, favorite)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
