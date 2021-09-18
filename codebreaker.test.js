const codeBreaker = require("./codeBreaker.js")


describe("Codebreaker function",()=>{
  test("All the numbers match with position too",()=>{
    const result = codeBreaker(1234,1234)
    expect("xxxx").toEqual(result)
  })
  
  test("No number matches ",()=>{
    const result = codeBreaker(6789,1234)
    expect("").toEqual(result)
  })
  
  test("All the numbers match with no position",()=>{
    const result = codeBreaker(3142,1234)
    expect("----").toEqual(result)
  })
  
  test("Just a number matchs",()=>{
    const result = codeBreaker(1789,1234)
    expect("x").toEqual(result)
  })
  
  test("Just a number matchs, but no in position",()=>{
    const result = codeBreaker(6845,1234)
    expect("-").toEqual(result)
  })
  
  test("Two numbers matchs",()=>{
    const result = codeBreaker(1267,1234)
    expect("xx").toEqual(result)
  })
  
  test("Two numbers matchs, but no in position",()=>{
    const result = codeBreaker(5163,1234)
    expect("--").toEqual(result)
  })
  
  test("Three numbers matchs",()=>{
    const result = codeBreaker(1237,1234)
    expect("xxx").toEqual(result)
  })
  
  test("Three numbers matchs, but no in position",()=>{
    const result = codeBreaker(2163,1234)
    expect("---").toEqual(result)
  })

})


