var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  });

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  });

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  });

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  });

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  });

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  });

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  });

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  });

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  });

  it('should have a working + operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8');
  })

  it('should have a working - operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })

  it('should have a working * operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('12');
  })

  it('should have a working / operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })

  it('should have a working = operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })

  it('should be able to chain events together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('14');
  })


    it('should work with positive integers', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number4')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_add')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('13');
    })

    it('should work with negative integers', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number6')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number8')).click();
      element(by.css('#operator_subtract')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('-2');
    })

    it('should work with large integers', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number2')).click();
      element(by.css('#number3')).click();
      element(by.css('#number7')).click();
      element(by.css('#number9')).click();
      element(by.css('#number3')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number2')).click();
      element(by.css('#number6')).click();
      element(by.css('#number1')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_multiply')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('621483608');
    })

    it('should work with decimals', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number8')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number3')).click();
      element(by.css('#operator_divide')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('2.6666666666666665');
    })

    it('should be able to divide by zero', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number8')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_divide')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('8');
    })

});
