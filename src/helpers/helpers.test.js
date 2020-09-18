import { getIsLiked, getUserIconColor } from '../helpers'

describe('Helpers:', () => {
  test('getIsLiked should return true', () => {
    const id = 123
    const liked = {
      123: {
        account: 'Test Account',
      },
    }
    const isLiked = getIsLiked(id, liked)
    expect(isLiked).toBe(true)
  })

  test('getIsLiked should return false', () => {
    const id = 12345
    const liked = {
      123: {
        account: 'Test Account',
      },
    }
    const isLiked = getIsLiked(id, liked)
    expect(isLiked).toBe(false)
  })

  test('getUserIconColor should return a color', () => {
    const color = getUserIconColor()
    expect(color).toBeTruthy()
  })
})
