const Shop = require('../src/shop.js');

describe('Shop', () => {
  let shop;
  beforeEach(() => {
    shop = new Shop;
  });

  test('abc return -1', () => {
    expect(shop.checkout("aBc")).toEqual(-1)
  })

  test('-B8x return - 1', () => {
    expect(shop.checkout("-B8x")).toEqual(-1)
  })

  test('return -1 with number as input', () => {
    expect(shop.checkout(12)).toEqual(-1)
  })

  test('return 100 with AA', () => {
    shop.checkout('AA')
    expect(shop.total).toEqual(100)
  })

  test('return 115 with ABCD', () => {
    shop.checkout('ABCD')
    expect(shop.total).toEqual(115)
  })

  test('return 130 with AAAA', () => {
    // shop.checkout('AAA')
    expect(shop.checkout('AAA')).toEqual(130)
  })
});