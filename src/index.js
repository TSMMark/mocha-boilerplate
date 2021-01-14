const Mocha = require('mocha')
const mocha = new Mocha()
const { assert } = require('chai');
const { strictEqual } = assert
mocha.suite.emit('pre-require', this, 'solution', mocha)
const { describe, it } = Mocha


//================================================================================
// Your Code
//================================================================================


// Return a number that is twice the value of the argument
const doubler = (n) => n


//================================================================================
// Your Tests
//================================================================================


it('returns 0 when given 0', () => {
  strictEqual(doubler(0), 0)
})

// Can you fix the `doubler` function so that this tests passes?
it('returns 10 when given 5', () => {
  strictEqual(doubler(5), 10)
})


//================================================================================
// Boilerplate
//================================================================================


mocha.run()
