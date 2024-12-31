function getItem (database, itemId) {
  const item = database.findById(itemId) // Item | null
  return item
}

const mockFindById = jest.fn()

const mockDatabase = {
  findById: mockFindById,
}

describe.skip('get item', () => {
  test('존재는 상품 조회',
    () => { // 실행
      mockFindById.mockReturnValue({ id: 1, name: '양파' })
      const item = getItem(mockDatabase, 1)

      // 검증
      expect(item).toEqual({ id: 1, name: '양파' })
    }
  )
})
