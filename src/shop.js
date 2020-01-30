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
    this.inputChecker(items)
  }

  inputChecker(items) {
    if (Number.isInteger(items) === true || items.match(/[|\\/~^:,;?!&%$@*+a-z]/)) {
      this.total = -1
    } else {
      this.stockCalculator(items)
    }
  }

  stockCalculator(items) {
    let newItems = items.split('');

    for (let i = 0; i < newItems.length; i++) {
      // } else if (newItems[i] === 'A' && newItems[i + 1] === 'A' && newItems[i + 2] === 'A') {
      //   return 130
      this.total += this.stockKeepingUnits[newItems[i]]
    }
  }
}

module.exports = Shop;