let markdownProcessor = require("../../index").markdownProcessor;

var expect  = require("chai").expect;

describe("Bold processor", () => { // TODO
    it('Simple line', () => {
        expect(markdownProcessor.process('a**e** vc')).to.equal('<div class=\'paragraph\'>\na<b>e</b> vc\n</div>');
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`a
**
**b**
**
c`)).to.equal(`<div class='paragraph'>
a
**
<b>b</b>
**
c
</div>`);
    })
})
