export default class NumberToRomanNumeral {
  constructor(number) {
    this.number = number;
  }

  toRomanNumeral() {
    const numeralIndexes = Object.keys(NumberToRomanNumeral.numeralMapping).reverse();

    let numerals = "",
        number = this.number;

    while(number > 0) {
      let match = number,
        mapping = NumberToRomanNumeral.numeralMapping[number];

      if(!mapping) {
        match = numeralIndexes.find(i => i < number)
        mapping = NumberToRomanNumeral.numeralMapping[match];
      }

      numerals += mapping;
      number -= match;
    }

    return numerals;
  }
}

NumberToRomanNumeral.numeralMapping = {
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I"
}
