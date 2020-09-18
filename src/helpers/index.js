import { colors } from '../styles'

/**
 * Check whether the passed id is available in the object
 * @param {string} id
 * @param {object} likedObject
 * @returns {boolean} true or false
 */
export const getIsLiked = (id, likedObject = {}) => {
  return !!likedObject[id]
}

/**
 * Everytime returns random color
 * @returns {String} randon color
 */
export const getUserIconColor = () => {
  return colors.userIcons[Math.floor(Math.random() * colors.userIcons.length)]
}

/**
 * A constant file to deliver the tabs in the sidebar
 */
export const tabs = {
  all: 'All',
  liked: 'Liked',
  clear: 'Clear All',
}
