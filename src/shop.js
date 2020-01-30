class Shop {
  constructor() {
    this.stockKeepingUnits = {
      'A': 50,
      'B': 30,
      'C': 20,
      'D': 15
    },
      this.total = 0
  }

  checkout(items) {
    if (Number.isInteger(items) === true || items.match(/[|\\/~^:,;?!&%$@*+a-z]/)) {
      this.total = -1
    } else {
      this.stockCalculator(items)
    }
  }

  stockCalculator(items) {
    let newItems = items.split('');

    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i] === 'A' && newItems[i + 1] === 'A' && newItems[i + 2] === 'A') {
        console.log(newItems[i] === 'A' && newItems[i + 1] === 'A' && newItems[i + 2] === 'A')
        this.total += 0
        console.log(this.total)
      } else {
        this.total += this.stockKeepingUnits[newItems[i]]
      }
    }
    console.log(this.total)
  }
}
// AAA = 130
// BB = 45
module.exports = Shop;