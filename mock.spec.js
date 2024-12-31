const mockFn = jest.fn((char, num) => {
  return `${char}-${num}`
})

test.skip('mock 함수 기록 확인', () => {
  mockFn('a', 1)
  mockFn('b', 2)
  mockFn('c', 3)

  console.log(mockFn.mock)

  expect(mockFn).toHaveBeenCalled()
  expect(mockFn).toHaveBeenCalledTimes(3)
  expect(mockFn).toHaveBeenCalledWith('a', 1)
  expect(mockFn).toHaveBeenLastCalledWith('c', 3)

  // 첫번째 호출의 첫번째 인자
  expect(mockFn.mock.calls[0][0]).toBe('a')
})
