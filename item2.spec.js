function getItem (database, itemId) {
  const item = database.findById(itemId) // Item | null
  return item
}

const mockFindById = jest.fn((id) => {
  if (id === 1) return { id: 1, name: '양파' }
  return null
})

const mockDatabase = {
  findById: mockFindById,
}

describe.skip('get item', () => {
  test('존재하는 상품 조회', () => {
    const item = getItem(mockDatabase, 1)
    expect(item).toEqual({ id: 1, name: '양파' })
  })

  test('존재하지 않는 상품 조회', () => {
    const item = getItem(mockDatabase, 2)
    expect(item).toBeNull()
  })
})
