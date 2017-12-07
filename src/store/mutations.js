// Mutations: 状態の変更処理

import * as types from './mutation-types'

/**
 * お気に入りに登録済みか判定
 *
 * @param { Array } favorites お気に入りリスト
 * @param { String } id 画像ID
 * @return { Boolean } true: 登録済み, false: 未登録
 *
 */
function isRegistered (favorites, id) {
  let isRegistered = false

  favorites.forEach((v) => {
    if (v.id === id) {
      isRegistered = true
    }
  })

  return isRegistered
}

/**
 * APIから取得した画像情報から必要なものだけを取り出す
 *
 * @param { Array } photos APIから取得した画像情報
 * @return { Array }
 *
 */
function createFormatedPhotos (favorites, photos) {
  let formatedPhotos = []

  photos.forEach((v) => {
    const formatedPhoto = {
      id: v.id,
      title: v.title,
      url: `https://farm${v.farm}.staticflickr.com/${v.server}/${v.id}_${v.secret}.jpg`,
      favorite: isRegistered(favorites, v.id)
    }

    formatedPhotos.push(formatedPhoto)
  })

  return formatedPhotos
}

/**
 * お気に入り画像を更新
 *
 * @param { Array } favorites お気に入りに入っている画像情報
 * @param { Object } favorite ユーザが新たにお気に入りした画像情報
 * @return { Array }
 *
 */
function updateFavorites (favorites, favorite) {
  let isMached = false

  // 重複チェック
  favorites.forEach((v) => {
    if (v.id === favorite.id) {
      isMached = true
    }
  })

  // 重複していたら
  if (isMached) {
    // 配列から削除
    favorites = favorites.filter(v => v.id !== favorite.id)
  } else {
  // 重複していなかったら
    // 配列に追加
    favorites.push(favorite)
  }

  // ローカルストレージを更新
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return favorites
}

export default {
  [types.CHANGE_KEYWORD] (state, keyword) {
    state.keyword = keyword
  },
  [types.SEARCH] (state, photos) {
    state.photos = createFormatedPhotos(state.favorites, photos)
  },
  [types.UPDATE_FAVORITES] (state, favorite) {
    state.favorites = updateFavorites(state.favorites, favorite)
  }
}
