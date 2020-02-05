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

  describe('discount AAA', () => {
    test('return 260 with 6 A', () => {
      shop.checkout('AAAAAA')
      expect(shop.total).toEqual(260)
    })

    test('return 310 with 7 A', () => {
      shop.checkout('AAAAAAA')
      expect(shop.total).toEqual(310)
    })

    test('return 360 with 8 A', () => {
      shop.checkout('AAAAAAAA')
      expect(shop.total).toEqual(360)
    })
  })

  describe('discount BB', () => {
    test('return 45 with 2 B', () => {
      shop.checkout('BB')
      expect(shop.total).toEqual(45)
    })

    test('return 75 with 3 B', () => {
      shop.checkout('BBB')
      expect(shop.total).toEqual(75)
    })

    test('return 90 with 4 B', () => {
      shop.checkout('BBBB')
      expect(shop.total).toEqual(90)
    })
  })

  describe('calculates both discount', () => {
    test('return 255', () => {
      shop.checkout('AAABBBBCD')
      expect(shop.total).toEqual(255)
    })
  })
});