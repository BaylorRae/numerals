import test from 'ava';

import NumberToRomanNumeral from '../../app/services/number_to_roman_numeral';

test("create instance with number", t => {
  const converter = new NumberToRomanNumeral(100);
  t.is(converter.number, 100);
});

test("1 should be I", t => {
  const converter = new NumberToRomanNumeral(1);
  t.is(converter.toRomanNumeral(), "I");
});

test("2 should be II", t => {
  const converter = new NumberToRomanNumeral(2);
  t.is(converter.toRomanNumeral(), "II");
});

test("3 should be III", t => {
  const converter = new NumberToRomanNumeral(3);
  t.is(converter.toRomanNumeral(), "III");
});

test("4 should be IV", t => {
  const converter = new NumberToRomanNumeral(4);
  t.is(converter.toRomanNumeral(), "IV");
});

test("5 should be V", t => {
  const converter = new NumberToRomanNumeral(5);
  t.is(converter.toRomanNumeral(), "V");
});

test("9 should be IX", t => {
  const converter = new NumberToRomanNumeral(9);
  t.is(converter.toRomanNumeral(), "IX");
});

test("10 should be X", t => {
  const converter = new NumberToRomanNumeral(10);
  t.is(converter.toRomanNumeral(), "X");
});

test("11 should be XI", t => {
  const converter = new NumberToRomanNumeral(11);
  t.is(converter.toRomanNumeral(), "XI");
});

test("30 should be XXX", t => {
  const converter = new NumberToRomanNumeral(30);
  t.is(converter.toRomanNumeral(), "XXX");
});

test("39 should be XXXIX", t => {
  const converter = new NumberToRomanNumeral(39);
  t.is(converter.toRomanNumeral(), "XXXIX");
});

test("40 should be XL", t => {
  const converter = new NumberToRomanNumeral(40);
  t.is(converter.toRomanNumeral(), "XL");
});

test("43 should be XLIII", t => {
  const converter = new NumberToRomanNumeral(43);
  t.is(converter.toRomanNumeral(), "XLIII");
});

test("47 should be XLVII", t => {
  const converter = new NumberToRomanNumeral(47);
  t.is(converter.toRomanNumeral(), "XLVII");
});

test("50 should be L", t => {
  const converter = new NumberToRomanNumeral(50);
  t.is(converter.toRomanNumeral(), "L");
});

test("57 should be LVII", t => {
  const converter = new NumberToRomanNumeral(57);
  t.is(converter.toRomanNumeral(), "LVII");
});

test("90 should be XC", t => {
  const converter = new NumberToRomanNumeral(90);
  t.is(converter.toRomanNumeral(), "XC");
});

test("99 should be XCIX", t => {
  const converter = new NumberToRomanNumeral(99);
  t.is(converter.toRomanNumeral(), "XCIX");
});

test("100 should be C", t => {
  const converter = new NumberToRomanNumeral(100);
  t.is(converter.toRomanNumeral(), "C");
});

test("400 should be CD", t => {
  const converter = new NumberToRomanNumeral(400);
  t.is(converter.toRomanNumeral(), "CD");
});

test("473 should be CDLXXIII", t => {
  const converter = new NumberToRomanNumeral(473);
  t.is(converter.toRomanNumeral(), "CDLXXIII");
});

test("499 should be CDXCIX", t => {
  const converter = new NumberToRomanNumeral(499);
  t.is(converter.toRomanNumeral(), "CDXCIX");
});

test("500 should be D", t => {
  const converter = new NumberToRomanNumeral(500);
  t.is(converter.toRomanNumeral(), "D");
});

test("900 should be CM", t => {
  const converter = new NumberToRomanNumeral(900);
  t.is(converter.toRomanNumeral(), "CM");
});

test("1000 should be M", t => {
  const converter = new NumberToRomanNumeral(1000);
  t.is(converter.toRomanNumeral(), "M");
});

test("3832 should be MMMDCCCXXXII", t => {
  const converter = new NumberToRomanNumeral(3832);
  t.is(converter.toRomanNumeral(), "MMMDCCCXXXII");
});

test("3999 should be MMMCMXCIX", t => {
  const converter = new NumberToRomanNumeral(3999);
  t.is(converter.toRomanNumeral(), "MMMCMXCIX");
});
