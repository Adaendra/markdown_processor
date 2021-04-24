let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Test", () => {
    it("sub", () => {
        markdownProcessor.process("test")

        expect(1).to.equal(1);
    });
});
