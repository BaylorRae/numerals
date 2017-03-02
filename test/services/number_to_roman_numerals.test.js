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

test("40 should be XL", t => {
  const converter = new NumberToRomanNumeral(40);
  t.is(converter.toRomanNumeral(), "XL");
});

test("50 should be L", t => {
  const converter = new NumberToRomanNumeral(50);
  t.is(converter.toRomanNumeral(), "L");
});

test("57 should be LVII", t => {
  const converter = new NumberToRomanNumeral(57);
  t.is(converter.toRomanNumeral(), "LVII");
});
