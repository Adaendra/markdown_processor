let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Image processor", () => { // TODO
    it('Simple line - Correct without spaces', () => {
        expect(markdownProcessor.process('![aaa](fff)')).to.equal('<img src="fff" alt="aaa">');
    })
    it('Simple line - Incorrect', () => {
        expect(markdownProcessor.process('![aaa ](fff)')).to.equal('![aaa ](fff)');
    })
    it('Simple line - Incorrect', () => {
        expect(markdownProcessor.process('![ aaa](fff)')).to.equal('![ aaa](fff)');
    })
    it('Simple line - Correct', () => {
        expect(markdownProcessor.process('![aaa]( fff)')).to.equal('<img src=" fff" alt="aaa">');
    })
    it('Simple line - Correct', () => {
        expect(markdownProcessor.process('![aaa](fff )')).to.equal('<img src="fff " alt="aaa">');
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`a
**
![aaa](fff)
**
c`)).to.equal(`a
**
<img src="fff" alt="aaa">
**
c`);
    })
})
