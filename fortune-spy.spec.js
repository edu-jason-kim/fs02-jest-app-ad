import FORTUNES from "./fortune";

function getFortuneString () {
  const date = new Date() // 2025
  const year = date.getFullYear()
  return FORTUNES[year % 3]
}

test('spy 운세', () => {
  const spyGetFullYear = jest.spyOn(Date.prototype, 'getFullYear')
  spyGetFullYear.mockReturnValue(2025)

  const result = getFortuneString()
  expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.')

  expect(Date.prototype.getFullYear).toHaveBeenCalledTimes(1)

  // 스파이 복구
  jest.restoreAllMocks()
})