const supertest = require("supertest");
const app = require("./app.js");
const request = supertest(app);

test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect("Content-Type", /text\/html/);

  expect(response.text).toEqual("<p>Hello World</p>");
});
