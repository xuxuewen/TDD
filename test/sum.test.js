import Persion from '../src/index';

jest.mock('../src/index')

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Persion.mockClear();
});

/**
 * @test {Persion}
 */
test('测试Persion的构造函数被调用了一次', () => {
  // expect(sum(1, 2)).toBe(3);
  const persion = new Persion();
  expect(Persion).toHaveBeenCalledTimes(1);
});