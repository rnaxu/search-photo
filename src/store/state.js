// State: 状態

/**
 * localStorageからfavoritesを取得
 *
 * @return { Array }
 *
 */
function getFavorites () {
  return JSON.parse(localStorage.getItem('favorites'))
}

export default {
  keyword: '',
  photos: [],
  favorites: getFavorites() || []
}
