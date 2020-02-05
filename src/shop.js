class Shop {
  constructor() {
    this.stockKeepingUnits = {
      'A': 50,
      'B': 30,
      'C': 20,
      'D': 15,
      'AAA': 130
    },
      this.total = 0;
    this.discountAAA = 0;
    this.discountBB = 0;
  }

  checkout(items) {
    let symbols = (/[|\\/~^:,;?!&%$@*+a-z]/)
    if (Number.isInteger(items) === true || items.match(symbols)) {
      this.total = -1
    } else {
      this.stockCalculator(items)
    }
  }

  stockCalculator(items) {
    for (let i = 0; i < items.length; i++) {
      let item = items.charAt(i)
      if (item === 'A') {
        this.discountAAA += 1
      } else if (item === 'B') {
        this.discountBB += 1
      }
      this.total += this.stockKeepingUnits[item]
    }
    this.discountAAACalculator()
    this.discountBBCalculator()
  }

  discountAAACalculator() {
    let discountA = Math.floor(this.discountAAA / 3) * 20;
    this.total -= discountA
  }

  discountBBCalculator() {
    let discountB = Math.floor(this.discountBB / 2) * 15;
    this.total -= discountB
  }
}



// AAA = 130
// BB = 45
module.exports = Shop;