class Shop {
  constructor() {
    this.stockKeepingUnits = {
      'A': 50,
      'B': 30,
      'C': 20,
      'D': 15,
      'AAA': 130
    },
      this.total = 0
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
    let discountAAA = 0;
    let discountBB = 0
    for (let i = 0; i < items.length; i++) {
      let item = items.charAt(i)
      if (item === 'A') {
        discountAAA += 1
      } else if (item === 'B') {
        console.log(item)
        discountBB += 1
      }
      console.log(item)
      this.total += this.stockKeepingUnits[item]
    }
    let discountAAACalculator = Math.floor(discountAAA / 3) * 20;
  
    this.total -= discountAAACalculator

    let discountBBCalculator = Math.floor(discountBB / 2) * 15;
   
    this.total -= discountBBCalculator
    console.log(this.total)
  }
}



// AAA = 130
// BB = 45
module.exports = Shop;