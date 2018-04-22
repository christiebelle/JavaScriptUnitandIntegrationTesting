var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })

  it('can subtract small nums', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(8);
    calculator.operatorClick("=");
    assert.equal(12, calculator.runningTotal);
  })

  it('can subtract large nums', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.numberClick(5);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(8);
    calculator.numberClick(3);
    calculator.numberClick(2);
    calculator.numberClick(9);
    calculator.operatorClick("=");
    assert.equal(12171, calculator.runningTotal);
  })

  it('can multiply small nums', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(8);
    calculator.operatorClick("=");
    assert.equal(160, calculator.runningTotal);
  })

  // it('can multiply large nums', function(){
  //   calculator.clearClick();
  //   calculator.numberClick(2);
  //   calculator.numberClick(0);
  //   calculator.numberClick(5);
  //   calculator.numberClick(0);
  //   calculator.numberClick(0);
  //   calculator.operatorClick("*");
  //   calculator.numberClick(8);
  //   calculator.numberClick(3);
  //   calculator.numberClick(2);
  //   calculator.numberClick(9);
  //   calculator.operatorClick("=");
  //   assert.equal(12171, calculator.runningTotal);
  // })

});
