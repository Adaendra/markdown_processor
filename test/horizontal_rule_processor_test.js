let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Horizontal Rule processor", () => { // TODO
    it('Simple line', () => {
        console.log(markdownProcessor.process("---"));
    })
    it('Multiline', () => {
        console.log(markdownProcessor.process(`a
---
b
---
c`));
    })
})
