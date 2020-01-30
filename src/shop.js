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
    // let strings = items.charAt(i)
    // if (Number.isInteger(items) === true) {
    //   return -1
    // } else {
    //   let newItems = items.split('')
    //   for (let i = 0; i < newItems.length; i++) {
    //     if (newItems[i] == newItems[i].toLowerCase()) {
    //       return -1
    //     } else if(newItems[i] === 'A' && newItems[i + 1] === 'A' && newItems[i + 2] === 'A'){
    //       return 130

    //     }else {
    //       this.total += this.stockKeepingUnits[newItems[i]]
    //     }
    //   }
    // }
  }
  integerChecker(items) {
    if (Number.isInteger(items) === true || items.includes(items.toLowerCase())) {
      return -1
    }
  }
}

module.exports = Shop;