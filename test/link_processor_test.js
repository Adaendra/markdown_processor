let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Link processor", () => { // TODO
    it('Simple line - Correct without spaces', () => {
        expect(markdownProcessor.process('[aaa](fff)')).to.equal(`<div class='paragraph'>
<a href="fff">aaa</a>
</div>`);
    })
    it('Simple line - Incorrect', () => {
        expect(markdownProcessor.process('[aaa ](fff)')).to.equal(`<div class='paragraph'>
[aaa ](fff)
</div>`);
    })
    it('Simple line - Incorrect 2', () => {
        expect(markdownProcessor.process('[ aaa](fff)')).to.equal(`<div class='paragraph'>
[ aaa](fff)
</div>`);
    })
    it('Simple line - Correct', () => {
        expect(markdownProcessor.process('[aaa]( fff)')).to.equal(`<div class='paragraph'>
<a href=" fff">aaa</a>
</div>`);
    })
    it('Simple line - Correct', () => {
        expect(markdownProcessor.process('[aaa](fff )')).to.equal(`<div class='paragraph'>
<a href="fff ">aaa</a>
</div>`);
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`a
**
[fff](aaa)
**
c`)).to.equal(`<div class='paragraph'>
a
**
<a href="aaa">fff</a>
**
c
</div>`);
    })
})
