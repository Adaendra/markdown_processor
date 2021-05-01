let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Link processor", () => { // TODO
    it('Simple line - Correct without spaces', () => {
        expect(markdownProcessor.process('[aaa](fff)')).to.equal('<a href="fff">aaa</a>');
    })
    it('Simple line - Incorrect', () => {
        expect(markdownProcessor.process('[aaa ](fff)')).to.equal('[aaa ](fff)');
    })
    it('Simple line - Incorrect', () => {
        expect(markdownProcessor.process('[ aaa](fff)')).to.equal('[ aaa](fff)');
    })
    it('Simple line - Correct', () => {
        expect(markdownProcessor.process('[aaa]( fff)')).to.equal('<a href=" fff">aaa</a>');
    })
    it('Simple line - Correct', () => {
        expect(markdownProcessor.process('[aaa](fff )')).to.equal('<a href="fff ">aaa</a>');
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`a
**
[fff](aaa)
**
c`)).to.equal(`a
**
<a href="aaa">fff</a>
**
c`);
    })
})
