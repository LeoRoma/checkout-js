const Shop = require('../src/shop.js');

describe('Shop', () => {
  let shop;
  beforeEach(() => {
    shop = new Shop;
  });

  describe('input check return -1 when', () => {
    xtest('lowercase char', () => {
      shop.checkout("aBc")
      expect(shop.total).toEqual(-1)
    })
  
    xtest('mixed lowercase char, symbols and numbers', () => {
      shop.checkout("-B8x")
      expect(shop.total).toEqual(-1)
    })
  
    xtest('symbols', () => {
      shop.checkout("-+=!?")
      expect(shop.total).toEqual(-1)
    })
  
    xtest('numbers', () => {
      shop.checkout(12)
      expect(shop.total).toEqual(-1)
    })
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

  test('return 260 with AAAAAA', () => {
    shop.checkout('AAAAAA')
    expect(shop.total).toEqual(260)
  })

  test('return 310 with AAAAAAA', () => {
    shop.checkout('AAAAAAA')
    expect(shop.total).toEqual(310)
  })

  test('return 360 with AAAAAAAA', () => {
    shop.checkout('AAAAAAAA')
    expect(shop.total).toEqual(360)
  })

  test('return 45 with BB', () => {
    shop.checkout('BB')
    expect(shop.total).toEqual(45)
  })
});