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
    let bonusAAA = 'AAA';
    let bonus = 0
    let last = null;
    let count = 0;
    if (items.match(bonusAAA)){
      bonus += 1
      // items.remove(bonusAAA)
      return true
    }
    // for (let i = 0; i < items.length; i++) {
    //   let item = items.charAt(i)
    //   // console.log(item == item -1)
    //   if (item != last) {
    //     last = item;
    //     count += 1;
    //     console.log(count)
    //   } else {
    //     this.total += this.stockKeepingUnits[item]
    //   }

    //   console.log(this.total)
    // }
  }
}
// AAA = 130
// BB = 45
module.exports = Shop;