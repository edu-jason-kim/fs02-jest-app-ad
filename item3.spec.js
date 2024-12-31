function getItem (database, itemId) {
  const item = database.findById(itemId) // Item | null
  return item
}

const mockFindById = jest.fn()

const mockDatabase = {
  findById: mockFindById,
}

describe.skip('get item', () => {
  test('존재하는 상품 조회', () => {
    mockFindById.mockImplementation((id) => {
      if (id === 1) return { id: 1, name: '양파' }
      return null
    })

    const item = getItem(mockDatabase, 1)
    expect(item).toEqual({ id: 1, name: '양파' })
  })

  test('존재하지 않는 상품 조회', () => {
    mockFindById.mockImplementation((id) => {
      if (id === 1) return { id: 1, name: '양파' }
      if (id === 2) return { id: 2, name: '사과' }
      return null
    })

    const item = getItem(mockDatabase, 3)
    expect(item).toBeNull()
  })
})
