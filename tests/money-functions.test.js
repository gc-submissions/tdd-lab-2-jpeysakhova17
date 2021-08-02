const {formatCurrency, getCoins} =require("../src/js/money-functions.js");

describe("formatCurrency", () => {
  test("add formatCurrency tests here", () => {
    //Arrange
    //Act
    //Assert
    expect(formatCurrency(0)).toBe("$0.00");
  });
  test("1", () => {
    expect(formatCurrency(1)).toBe("$1.00");
  })
  test("1.5", () => {
    expect(formatCurrency(1.5)).toBe("$1.50");
  })
  test("0.01", () => {
    expect(formatCurrency(0.01)).toBe("$0.01");
  })
  test("long one", () => {
    expect(formatCurrency(527.6789)).toBe("$527.68");
  })
  test("using a negative number", () => {
    expect(formatCurrency(-1)).toBe("-$1.00");
  })
  test("using a long negative number", () => {
    expect(formatCurrency(-.026)).toBe("-$0.03");
  })
  test("27", () => {
    expect(formatCurrency(27)).toBe("$27.00");
  })
});

describe("getCoins", () => {
  test("testing 32 cents", () => {
    expect(getCoins(32)).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
  });
  test("testing 68 cents", () => {
    expect(getCoins(68)).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3});
  })
  test("testing 10 cents", () => {
    expect(getCoins(10)).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0});
  })
  test("testing 27 cents", () => {
    expect(getCoins(27)).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2});
  })
});