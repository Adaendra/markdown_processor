let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Bold processor", () => { // TODO
    it('Simple line', () => {
        expect(markdownProcessor.process('a**e** vc')).to.equal('a<b>e</b> vc');
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`a
**
**b**
**
c`)).to.equal(`a
**
<b>b</b>
**
c`);
    })
})
