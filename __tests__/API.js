const supertest = require("supertest");
const app = require("../index");

const api = supertest(app);

describe("Codebreaker tests", () => {

  test("should return status code 200 with method post", () => {
    api.get("/api/codebreaker").then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });

  test("it should return application/json content.type", async () => {
    const res = await api
      .post("/api/codebreaker")
      .send({ number: 3045, random: 2345 });

    expect(res.type).toBe("application/json");
  });

  test("it should return a valid json object", async () => {
    const res = await api
      .post("/api/codebreaker")
      .send({ number: 3045, random: 3045 });
    expect(res.body).not.toBeNull();
  });

  test("Api return in response object the key number", async () => {
    const res = await api
      .post("/api/codebreaker")
      .send({ number: 3045, random: 2345 });
    expect(res.body.values.result).not.toBeUndefined();
  });

  test("Api return in response object the key toMacth", async () => {
    const res = await api
      .post("/api/codebreaker")
      .send({ number: 3045, random: 2345 });
    expect(res.body.values.toMatch).not.toBeUndefined();
  });
 ///////////////

  test("Api return in response object the key toMacth", async () => {
    const res = await api
      .get("/api/codebreaker")
    expect(res.status).toEqual(200)
  });

  test("Api get shuold response with status 200", async () => {
    const res = await api
      .get("/api/codebreaker")
    expect(res.status).toEqual(200)
  });

  test("Api get should return application/json content.type", async () => {
    const res = await api
      .get("/api/codebreaker")
    expect(res.type).toBe("application/json");
  });

  test("Api get shuold response object with the key number", async () => {
    const res = await api
      .get("/api/codebreaker")
    expect(res.body.number).not.toBeUndefined();
  });

  test("Api get should return a valid json object", async () => {
    const res = await api
      .get("/api/codebreaker")
      
    expect(res.body).not.toBeNull();
  });

});
