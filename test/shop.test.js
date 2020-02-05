const Shop = require('../src/shop.js');

describe('Shop', () => {
  let shop;
  beforeEach(() => {
    shop = new Shop;
  });

  describe('input check return -1 when', () => {
    test('lowercase char', () => {
      shop.checkout("aBc")
      expect(shop.total).toEqual(-1)
    })
  
    test('mixed lowercase char, symbols and numbers', () => {
      shop.checkout("-B8x")
      expect(shop.total).toEqual(-1)
    })
  
    test('symbols', () => {
      shop.checkout("-+=!?")
      expect(shop.total).toEqual(-1)
    })
  
    test('numbers', () => {
      shop.checkout(12)
      expect(shop.total).toEqual(-1)
    })
  })
  

  describe('calculating stock without discount', () => {
    test('return 100 with AA', () => {
      shop.checkout('AA')
      expect(shop.total).toEqual(100)
    })
  
    test('return 115 with ABCD', () => {
      shop.checkout('ABCD')
      expect(shop.total).toEqual(115)
    })
  
    test('return 130 with AABCD', () => {
      shop.checkout('AABCD')
      expect(shop.total).toEqual(165)
    })
  })
 

  xtest('return 260 with AAAAAA', () => {
    shop.checkout('AAAAAA')
    expect(shop.total).toEqual(260)
  })

  xtest('return 310 with AAAAAAA', () => {
    shop.checkout('AAAAAAA')
    expect(shop.total).toEqual(310)
  })

  xtest('return 360 with AAAAAAAA', () => {
    shop.checkout('AAAAAAAA')
    expect(shop.total).toEqual(360)
  })

  test('return 45 with BB', () => {
    shop.checkout('BB')
    expect(shop.total).toEqual(45)
  })
});