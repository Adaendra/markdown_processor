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
    it('Simple line - Correct - Options width', () => {
        expect(markdownProcessor.process('![aaa{"width":"120px"}](fff)')).to.equal('<img src="fff" alt="aaa" width="120px">');
    })
    it('Simple line - Correct - Options height', () => {
        expect(markdownProcessor.process('![aaa{"height":"120px"}](fff)')).to.equal('<img src="fff" alt="aaa" height="120px">');
    })
    it('Simple line - Correct - Options width & height', () => {
        expect(markdownProcessor.process('![aaa{"width":"100px","height":"120px"}](fff)')).to.equal('<img src="fff" alt="aaa" width="100px" height="120px">');
    })
    it('Simple line - Incorrect options', () => {
        expect(markdownProcessor.process('![aaa{"width":"100px"](fff )')).to.equal('<img src="fff " alt="aaa{"width":"100px"">');
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
