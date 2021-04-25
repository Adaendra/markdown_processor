let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Italic processor", () => { // TODO
    it('Simple line', () => {
        expect(markdownProcessor.process('a*e* vc')).to.equal('a<i>e</i> vc');
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`a
**
*b*
**
c`)).to.equal(`a
**
<i>b</i>
**
c`);
    })
})
