require("dotenv").config();
const app = require("../app");
const request = require("supertest");

// Unit Testing
describe("RATHOS API", () => {

  describe("/pictures", () => {
    it("Should send back a JSON object pictures (no query)", function() {

      request(app).get("/pictures")
                  .set("Content-Type", "application/json")
                  .expect("Content-Type", /json/)
                  .expect(200, (err, res) => {
                    if (err) return done(err);
                    console.log(res.body.meta);
                  })
    });

    it("Should send back a JSON object pictures (with tags query)", function() {

      request(app).get("/pictures?tags=cat")
                  .set("Content-Type", "application/json")
                  .expect("Content-Type", /json/)
                  .expect(200, (err, res) => {
                    if (err) return done(err);
                    console.log(res.body.meta);
                  })
    });

    it("Should send back a JSON object pictures (with page query)", function() {

      request(app).get("/pictures?page=1")
                  .set("Content-Type", "application/json")
                  .expect("Content-Type", /json/)
                  .expect(200, (err, res) => {
                    if (err) return done(err);
                    console.log(res.body.meta);
                  })
    });

    it("Should send back a JSON object pictures (with tags & page query)", function() {

      request(app).get("/pictures?tags=cat&page=5")
                  .set("Content-Type", "application/json")
                  .expect("Content-Type", /json/)
                  .expect(200, (err, res) => {
                    if (err) return done(err);
                    console.log(res.body.meta);
                  })
    })
  });

});
