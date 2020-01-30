const Shop = require('../src/shop.js');

describe('Shop', () => {
  let shop;
  beforeEach(() => {
    shop = new Shop;
  });

  test('abc return -1', () => {
    shop.checkout("aBc")
    expect(shop.total).toEqual(-1)
  })

  test('-B8x return - 1', () => {
    shop.checkout("-B8x")
    expect(shop.total).toEqual(-1)
  })

  test('only symbols return - 1', () => {
    shop.checkout("-+=!?")
    expect(shop.total).toEqual(-1)
  })

  test('return -1 with number as input', () => {
    shop.checkout(12)
    expect(shop.total).toEqual(-1)
  })

  xtest('return 100 with AA', () => {
    shop.checkout('AA')
    expect(shop.total).toEqual(100)
  })

  xtest('return 115 with ABCD', () => {
    shop.checkout('ABCD')
    expect(shop.total).toEqual(115)
  })

  test('return 130 with AAA', () => {
    shop.checkout('AAA')
    expect(shop.total).toEqual(130)
  })

  xtest('return 260 with AAAAAA', () => {
    shop.checkout('AAAAAA')
    expect(shop.total).toEqual(260)
  })
});