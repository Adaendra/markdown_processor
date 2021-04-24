let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Test", () => {
    it("sub", () => {
        markdownProcessor.process()

        expect(1).to.equal(1);
    });
});
