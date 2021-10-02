const request = require('supertest');
const api = require("../index");


describe('Pruebas de la API codebreaker',(done)=>{

  test('should return status code 200', () => {
    request(api)
    .post("/api/codebreaker") 
    .then(response => {
        expect(response.statusCode).toBe(200); 
        done();
    });
  })


  test('it should return application/json content.type', () => {
    request(api)
    .post("/api/codebreaker")
    /* .send({number: 2000, random: 5000}) */
    .then(response => {
      expect(response.type).toBe("application/json");
        done();
    });
  })


  test('it should return a valid json object', () => {
    request(api)
    .post("/api/codebreaker")
    /* .send({number: 2000, random: 5000}) */
    .then(response => {
      expect(response.body).not.toBeNull();
        done();
    });
  })

  test('it should return a valid json object', () => {
    request(api)
    .post("/api/codebreaker")
    /* .send({number: 2000, random: 5000}) */
    .then(response => {
      expect(response.body.dsjkgffk).not.toBeUndefined();
        done();
    });
  })
 

})


