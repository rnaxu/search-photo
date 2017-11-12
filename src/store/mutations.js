// Mutations: 状態の変更処理

import * as types from './mutation-types'

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

export default {
  [types.CHANGE_KEYWORD] (state, keyword) {
    state.keyword = keyword
  },
  [types.SEARCH] (state, photos) {
    state.photos = createFormatedPhotos(photos)
  },
  [types.UPDATE_FAVORITES] (state, favorite) {
    state.favorites = addFavorites(state.favorites, favorite)
  }
}
