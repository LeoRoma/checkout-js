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
    if (items.match(bonusAAA)) {
      // this.bonusAAACalculator(items);
      // items.remove(bonusAAA)
      this.total -= 20
      // console.log(bonus)
    }
    for (let i = 0; i < items.length; i++) {
      let item = items.charAt(i)
      // // console.log(item == item -1)
      // if (items[i++] === items[i] && items[i] === items[i+1]){
      //   this.total -= 20
      // } else {
      this.total += this.stockKeepingUnits[item]
    }

    console.log(this.total)
  }
}



// AAA = 130
// BB = 45
module.exports = Shop;