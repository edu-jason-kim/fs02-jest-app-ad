class Fortune {
  getMessage (year) {
    return `${year}년의 운세입니다!`
  }
}

describe('spy', () => {

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('spy 기록 확인', () => {
    const fortune = new Fortune()
    const spy = jest.spyOn(fortune, 'getMessage')
  
    fortune.getMessage(2024)
    fortune.getMessage(2025)
    fortune.getMessage(2026)
  
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(3)
    expect(spy).toHaveBeenCalledWith(2024)
    expect(spy).toHaveBeenLastCalledWith(2026)
  })
  
})
