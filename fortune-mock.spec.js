import FORTUNES from './fortune'

function getFortuneString(date) {
  const year = date.getFullYear()
  return FORTUNES[year % 3]
}

const mockGetFullYear = jest.fn(() => 2025)

test('mock 운세', () => {
  const mockDate = {
    getFullYear: mockGetFullYear
  }

  const result = getFortuneString(mockDate)
  expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.')

  // 한번 호출 됐어야 했다.
  expect(mockGetFullYear).toHaveBeenCalledTimes(1)
})