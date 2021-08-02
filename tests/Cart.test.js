const Product = require("../src/js/Product");
const Cart = require("../src/js/Cart");



//add(product) test:

describe("Cart", () => {
  test("adding one product", () => {

    //Arrange 
    let cart = new Cart();
    let coffee = new Product("coffee", 4.50, true);
    //Act
    cart.add(coffee)
    //Assert 
    expect(cart.items.length).toEqual(1);
  })
  test("adding two products", () => {

    //Arrange 
    let cart = new Cart();
    let apple = new Product("apple", 0.50, true);
    let orange = new Product("orange", 0.70, true);
    //Act
    cart.add(apple);
    cart.add(orange);
    //Assert 
    expect(cart.items.length).toEqual(2);
  })
});

// getItemCount() test:

describe("Cart", () => {
  test("getItemCount() function", () => {
  //Arrange
  let babyCart = new Cart();
  let stroller = new Product("stroller", 700, true);
  let diapers = new Product("diapers", 25, true);
  //Act
  babyCart.add(stroller);
  babyCart.add(diapers);
  //Assert
  expect(babyCart.getItemCount()).toEqual(2);
  })
  test("getItemCount() 2nd example", () => {
    //Arrange
    let groceryCart = new Cart();
    let cereal = new Product("cheerios", 5, true);
    let butter = new Product("butter", 2.50, true);
    let bread = new Product("bread", 3.25, true);
    let flour = new Product("flour", 4, true);
    //Act
    groceryCart.add(cereal);
    groceryCart.add(butter);
    groceryCart.add(bread);
    groceryCart.add(flour);
    //Assert
    expect(groceryCart.getItemCount()).toEqual(4);
    })
});


//getTotalBeforeTax() test:

describe("Cart", () => {
  test("getTotalBeforeTax() function", () => {

    //Arrange 
    let cart = new Cart();
    let coffee = new Product("coffee", 4.50, true);
    //Act
    cart.add(coffee)
    //Assert 
    expect(cart.getTotalBeforeTax()).toEqual(4.50);
  }) 
  test("getTotalBeforeTax() 2nd example", () => {

    //Arrange 
    let decorCart = new Cart();
    let flowers = new Product("flowers", 6.50, true);
    let balloons = new Product("balloons", 10, false);
    //Act
    decorCart.add(flowers);
    decorCart.add(balloons);
    //Assert 
    expect(decorCart.getTotalBeforeTax()).toEqual(16.50);
  }) 

  //getTotalWithTax() test:
  test("getTotalWithTax() function", () => {

    //Arrange
    let cart = new Cart ();
    let water = new Product("water", 1.50, true);

    //Act
    cart.add(water);

    //Assert
    expect(cart.getTotalWithTax()).toBeCloseTo(1.65);
  })
  test("getTotalWithTax() function", () => {

    //Arrange
    let furniture = new Cart ();
    let couch = new Product("couch", 3550, true);
    let chair = new Product("chair", 400, false);

    //Act
    furniture.add(couch);
    furniture.add(chair);

    //Assert
    expect(furniture.getTotalWithTax()).toBeCloseTo(4305);
  })

  //getTax() test:

  test("testing how much the tax amount is", () => {

    //Arrange
    let cart = new Cart();
    let glasses = new Product("glasses", 400, true);
    let contacts = new Product("contacts", 250, false);

    //Act
    cart.add(glasses);
    cart.add(contacts);

    //Arrange
    console.log("cart.getTax() is", cart.getTax());
    expect(cart.getTax()).toBeCloseTo(40);
  })

});


