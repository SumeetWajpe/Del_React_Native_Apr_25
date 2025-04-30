const sum = require("./sum");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

describe("tests addition", () => {
  it("tests addition of two numbers", () => {
    // AAA - Arrange -> Act -> Assert

    // Arrange
    let result = null;

    // Act
    result = sum(1, 2);

    // Assert
    expect(result).toBe(3);
  });
});
