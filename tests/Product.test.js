
const Product = require("../src/js/Product");

//#1:

//apples test 
describe("Product", () => {

  test("confirming that parameters are correct", () => {
    //arrange
    let apples = new Product("apples", 2, false);

    //assert
    //toEqual rather than toBe because toBe means exactly the same thing, doesn't work for products -----> these are both matchers (assertions)
    //if you want somehting similar like rounded number vs exact, you'd use toBeCloseTo
    expect(apples).toEqual({name:"apples", price:2, taxable:false});
  });
});

//oranges test 
describe("Product", () => {

  test("confirming that parameters are correct", () => {
    //arrange
    let oranges = new Product("oranges", 1.20, true);

    //assert
    //toEqual rather than toBe because toBe means exactly the same thing, doesn't work for products -----> these are both matchers (assertions)
    //if you want somehting similar like rounded number vs exact, you'd use toBeCloseTo
    expect(oranges).toEqual({name:"oranges", price:1.20, taxable:true});
  });
});


//#2:

test("if Product is taxable, use getPriceWithTax to return the price with 10% tax", () => {
//arrange
let toys = new Product ("toys", 15, true);
//act

//assert
expect(toys.getPriceWithTax()).toBeCloseTo(16.5); 

})

test("another taxable example using the getPrieWithTax method", () => {
  //arrange
  let cups = new Product ("cups", 3.50, true);
  //act

  //assert
  expect(cups.getPriceWithTax()).toBeCloseTo(3.85);
})

//#3:

test("Product without tax that will return just the price using the getPriceWithTax", () => {
  //arrange
  let water = new Product ("water", 2, false);

  //act

  //assert
  expect(water.getPriceWithTax()).toBeCloseTo(2);
})

test("another Product without tax using the getPriceWithTax method", () => {
  //arrange
  let kitkat = new Product ("kitkat", 4, false);
  //act

  //assert
  expect(kitkat.getPriceWithTax()).toBeCloseTo(4);
})
