import Vue from 'vue'
import Vuex from 'vuex'
import { CHANGE_KEYWORD, SEARCH } from './mutation-types'

Vue.use(Vuex)

function getPhotos (query) {
  return fetch(`https://api.flickr.com/services/rest?method=flickr.photos.search&per_page=18&format=json&nojsoncallback=1&text=${query}&api_key=6708f15f09cc822b9853f79d8161ea02`)
    .then(res => res.json())
}

function createFormatedPhotos (photos) {
  let formatedPhotos = []

  photos.forEach((v) => {
    const formatedPhoto = {
      title: v.title,
      url: `https://farm${v.farm}.staticflickr.com/${v.server}/${v.id}_${v.secret}.jpg`
    }

    formatedPhotos.push(formatedPhoto)
  })

  return formatedPhotos
}

const state = {
  keyword: '',
  photos: []
}

const actions = {
  [CHANGE_KEYWORD] ({ commit }, keyword) {
    commit(CHANGE_KEYWORD, keyword)
  },

  [SEARCH] ({ commit, state }) {
    getPhotos(state.keyword)
      .then(data => {
        commit(SEARCH, data.photos.photo)
      })
  }
}

const getters = {
  photos: state => state.photos
}

const mutations = {
  [CHANGE_KEYWORD] (state, keyword) {
    state.keyword = keyword
  },
  [SEARCH] (state, photos) {
    state.photos = createFormatedPhotos(photos)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
