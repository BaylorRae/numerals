import test from 'ava';

import NumberToRomanNumeral from '../../app/services/number_to_roman_numeral';

test("create instance with number", t => {
  const converter = new NumberToRomanNumeral(100);
  t.is(converter.number, 100);
});

test.todo("1 should be I");
test.todo("2 should be II");
test.todo("3 should be III");
test.todo("4 should be IV");
test.todo("5 should be V");
test.todo("10 should be X");
test.todo("11 should be XI");
test.todo("30 should be XXX");
