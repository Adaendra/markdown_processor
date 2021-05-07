let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Horizontal Rule processor", () => { // TODO
    it('Simple line', () => {
        expect(markdownProcessor.process("---")).to.equal(`<div class='paragraph'>

<div class='horizontal_rule'></div>

</div>`)
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`a
---
b
---
c`)).to.equal(`<div class='paragraph'>
a
<div class='horizontal_rule'></div>
b
<div class='horizontal_rule'></div>
c
</div>`)
    })
    it('Multiline with spaces', () => {
        expect(markdownProcessor.process(`a
---

b
---
c`)).to.equal(`<div class='paragraph'>
a
<div class='horizontal_rule'></div>


</div>
<div class='paragraph'>
b
<div class='horizontal_rule'></div>
c
</div>`)
    })
})
