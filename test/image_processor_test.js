let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Image processor", () => { // TODO
    it('Simple line - Correct without spaces', () => {
        expect(markdownProcessor.process('![aaa](fff)')).to.equal(`<div class='paragraph'>
<img src="fff" alt="aaa">
</div>`);
    })
    it('Simple line - Incorrect', () => {
        expect(markdownProcessor.process('![aaa ](fff)')).to.equal(`<div class='paragraph'>
![aaa ](fff)
</div>`);
    })
    it('Simple line - Incorrect', () => {
        expect(markdownProcessor.process('![ aaa](fff)')).to.equal(`<div class='paragraph'>
![ aaa](fff)
</div>`);
    })
    it('Simple line - Correct', () => {
        expect(markdownProcessor.process('![aaa]( fff)')).to.equal(`<div class='paragraph'>
<img src=" fff" alt="aaa">
</div>`);
    })
    it('Simple line - Correct', () => {
        expect(markdownProcessor.process('![aaa](fff )')).to.equal(`<div class='paragraph'>
<img src="fff " alt="aaa">
</div>`);
    })
    it('Simple line - Correct - Options width', () => {
        expect(markdownProcessor.process('![aaa{"width":"120px"}](fff)')).to.equal(`<div class='paragraph'>
<img src="fff" alt="aaa" width="120px">
</div>`);
    })
    it('Simple line - Correct - Options height', () => {
        expect(markdownProcessor.process('![aaa{"height":"120px"}](fff)')).to.equal(`<div class='paragraph'>
<img src="fff" alt="aaa" height="120px">
</div>`);
    })
    it('Simple line - Correct - Options show legend', () => {
        expect(markdownProcessor.process('![aaa{"showLegend":true}](fff)')).to.equal(`<div class='paragraph'>
<figure><img src="fff" alt="aaa"><figcaption>aaa</figcaption></figure>
</div>`);
    })
    it('Simple line - Correct - Options width & height', () => {
        expect(markdownProcessor.process('![aaa{"width":"100px","height":"120px"}](fff)'))
            .to.equal(`<div class='paragraph'>
<img src="fff" alt="aaa" width="100px" height="120px">
</div>`);
    })
    it('Simple line - Correct - Options width & height & showLegend disable', () => {
        expect(markdownProcessor.process('![aaa{"width":"100px","height":"120px", "showLegend": false}](fff)'))
            .to.equal(`<div class='paragraph'>
<img src="fff" alt="aaa" width="100px" height="120px">
</div>`);
    })
    it('Simple line - Correct - Options width & height & showLegend enable', () => {
        expect(markdownProcessor.process('![aaa{"width":"100px","height":"120px", "showLegend": true}](fff)'))
            .to.equal(`<div class='paragraph'>
<figure><img src="fff" alt="aaa" width="100px" height="120px"><figcaption>aaa</figcaption></figure>
</div>`);
    })
    it('Simple line - Incorrect options', () => {
        expect(markdownProcessor.process('![aaa{"width":"100px"](fff )'))
            .to.equal(`<div class='paragraph'>
<img src="fff " alt="aaa{"width":"100px"">
</div>`);
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`a
**
![aaa](fff)
**
c`)).to.equal(`<div class='paragraph'>
a
**
<img src="fff" alt="aaa">
**
c
</div>`);
    })
})
