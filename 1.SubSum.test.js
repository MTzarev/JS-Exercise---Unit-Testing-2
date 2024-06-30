let subSum =  require('./1. SubSum.js');
let chai = require('chai'); 
let expect = chai.expect;

describe(`SumFunctions`, ()=>{
    it(`works`,()=>{
        expect(subSum([10, 20, 30, 40, 50, 60], 3, 300)).to.equal(150)
    })
    it (`secondInput`,()=>{
        expect(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1).toFixed(1)).to.equal(3.3)
    })
    it (`finalTest`, ()=>{
        expect(subSum([10, 'twenty', 30, 40], 0, 2)).to.be.NaN
    })
})