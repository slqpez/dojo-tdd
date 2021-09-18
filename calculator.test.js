const {sum,substract} = require("./calculator")


describe("Sum",()=>{
  test("Sum 1+2 to equals 2",()=>{
    const result = sum(1,1)
    expect(result).toEqual(2)
  })

  test("Sum 3+7 to equals 10",()=>{
    const result = sum(3,7)
    expect(result).toEqual(10)
  })

})


describe("Substract",()=>{
  test("Substract 5-2 to equals 3",()=>{
    const result = substract(5,2)
    expect(result).toEqual(3)
  })

})