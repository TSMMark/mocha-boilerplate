const Mocha = require('mocha')
const mocha = new Mocha()
const { assert } = require('chai');
const { deepEqual } = assert
mocha.suite.emit('pre-require', this, 'solution', mocha)
const { describe, it } = Mocha

/* ------------------------------------------------------------------------- */

const phoneAnagram = (digits) => {
  const digitLetterMap = {
    '0': [' '],
    '1': ['1'],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }

  return digits.split('').reduce((anagrams, digit) => {
    const chars = digitLetterMap[digit]
    return anagrams.length ? anagrams.flatMap((p) => chars.flatMap((char) => [`${p}${char}`])) : chars
  }, [])
}

/* ------------------------------------------------------------------------- */

it('returns empty array when givin no digits', () => {
  const result = phoneAnagram('')
  deepEqual(result, [])
})

it('returns expected results for 1 digit', () => {
  const result = phoneAnagram('2')
  deepEqual(result, ['a', 'b', 'c'])
})

it('returns expected results for 2 digits', () => {
  const result = phoneAnagram('23')
  deepEqual(result, ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})

it('returns expected results for 2 digits', () => {
  const result = phoneAnagram('589')
  deepEqual(result, ['jtw', 'jtx', 'jty', 'jtz', 'juw', 'jux', 'juy', 'juz', 'jvw', 'jvx', 'jvy', 'jvz', 'ktw', 'ktx', 'kty', 'ktz', 'kuw', 'kux', 'kuy', 'kuz', 'kvw', 'kvx', 'kvy', 'kvz', 'ltw', 'ltx', 'lty', 'ltz', 'luw', 'lux', 'luy', 'luz', 'lvw', 'lvx', 'lvy', 'lvz'])
})

/* ------------------------------------------------------------------------- */

mocha.run()
