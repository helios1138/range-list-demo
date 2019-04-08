import { RangeList } from './RangeList'

test('RangeList initialization and printing works', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation(() => () => {})

  const rl = new RangeList([[3, 6], [10, 12]])
  rl.print()
  expect(spy.mock.calls).toEqual([['[3, 6) [10, 12)']])

  spy.mockRestore()
})

test('Range addition and removal works', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation(() => () => {})

  const rl = new RangeList()

  rl.add([1, 5])
  rl.print()
  expect(spy.mock.calls).toEqual([['[1, 5)']])
  spy.mockClear()

  rl.add([10, 20])
  rl.print()
  expect(spy.mock.calls).toEqual([['[1, 5) [10, 20)']])
  spy.mockClear()

  rl.add([20, 20])
  rl.print()
  expect(spy.mock.calls).toEqual([['[1, 5) [10, 20)']])
  spy.mockClear()

  rl.add([20, 21])
  rl.print()
  expect(spy.mock.calls).toEqual([['[1, 5) [10, 21)']])
  spy.mockClear()

  rl.add([2, 4])
  rl.print()
  expect(spy.mock.calls).toEqual([['[1, 5) [10, 21)']])
  spy.mockClear()

  rl.add([3, 8])
  rl.print()
  expect(spy.mock.calls).toEqual([['[1, 8) [10, 21)']])
  spy.mockClear()

  rl.remove([10, 10])
  rl.print()
  expect(spy.mock.calls).toEqual([['[1, 8) [10, 21)']])
  spy.mockClear()

  rl.remove([10, 11])
  rl.print()
  expect(spy.mock.calls).toEqual([['[1, 8) [11, 21)']])
  spy.mockClear()

  rl.remove([15, 17])
  rl.print()
  expect(spy.mock.calls).toEqual([['[1, 8) [11, 15) [17, 21)']])
  spy.mockClear()

  rl.remove([3, 19])
  rl.print()
  expect(spy.mock.calls).toEqual([['[1, 3) [19, 21)']])
  spy.mockClear()

  spy.mockRestore()
})
