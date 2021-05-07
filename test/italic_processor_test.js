let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Italic processor", () => { // TODO
    it('Simple line', () => {
        expect(markdownProcessor.process('a*e* vc')).to.equal(`<div class='paragraph'>
a<i>e</i> vc
</div>`);
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`a
**
*b*
**
c`)).to.equal(`<div class='paragraph'>
a
**
<i>b</i>
**
c
</div>`);
    })
})
