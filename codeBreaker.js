
function codeBreaker(number,random){

  const numberTostring = number.toString();
  const testString = random.toString();
  
  let toMatch = testString?testString:toMatchRandom
  let result= ""
  for(let i=0; i<numberTostring.length; i++){
    if(numberTostring[i] === toMatch[i]){
      result = result.concat("x")
    }else {
      if(toMatch.includes(numberTostring[i])){
        result = result.concat("-")
      }
    }
  }
  return {result, toMatch}
}


function randomNumber(){
  let toMatchRandom=""
  for (let index = 0; index < 4; index++) {
    toMatchRandom =toMatchRandom.concat((Math.floor(Math.random() * (9 - 0)) + 0).toString())
  }
  return toMatchRandom
}

module.exports = {codeBreaker, randomNumber}

