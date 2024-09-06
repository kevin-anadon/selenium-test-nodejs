const { homeTest} = require('./specs/home.spec');
const { golfTest} = require('./specs/golf.spec');
const assert = require('assert');

describe("ADM Tests", () => {
  it("Go Home", async () => {
    const result = await homeTest()
    assert.strictEqual(result, true)
  })
  it("Go Golf", async () => {
    const result = await golfTest()
    assert.strictEqual(result, true)
  })
})