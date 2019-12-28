'use strict';

//jshint expr: true
const chai = require('chai'),
      expect = chai.expect;

chai.should();

describe('number tests', ()=>{

    function isEven(num) {
        return num % 2 === 0;
    }

    describe('isEven', ()=>{
        it('should return true when number is even', ()=>{
            isEven(4).should.be.true;
        })

        it('should return false when number is odd', ()=>{
            expect(isEven(3)).to.be.false;
        })
    });

    function add(num1, num2) {
        return num1 + num2;
    }

    describe('add without setup/teardown', ()=>{
        let num;

        beforeEach(()=>{
            num = 5;
        })
    
        it('should be eleven when adding 5 to 6', ()=>{
            num = add(num, 6);
            num.should.equal(11);
        });

        it('should be fifteen when adding 5 to 10', ()=>{
            num = add(num, 10);
            num.should.equal(15);
        });
    })
});