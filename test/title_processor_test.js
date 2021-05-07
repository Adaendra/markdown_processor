let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Title processors", () => {
    it("H1", () => {
        expect(markdownProcessor.process('# Niveau 1')).to.equal(`<div class='paragraph'>
<h1>Niveau 1</h1>
</div>`);
    });
    it("H2", () => {
        expect(markdownProcessor.process('## Niveau 2')).to.equal(`<div class='paragraph'>
<h2>Niveau 2</h2>
</div>`);
    });
    it("H3", () => {
        expect(markdownProcessor.process('### Niveau 3')).to.equal(`<div class='paragraph'>
<h3>Niveau 3</h3>
</div>`);
    });
    it("H4", () => {
        expect(markdownProcessor.process('#### Niveau 4')).to.equal(`<div class='paragraph'>
<h4>Niveau 4</h4>
</div>`);
    });
    it("H5", () => {
        expect(markdownProcessor.process('##### Niveau 5')).to.equal(`<div class='paragraph'>
<h5>Niveau 5</h5>
</div>`);
    });
    it("H6", () => {
        expect(markdownProcessor.process('###### Niveau 6')).to.equal(`<div class='paragraph'>
<h6>Niveau 6</h6>
</div>`);
    });
    it("Ignored", () => {
        expect(markdownProcessor.process('Hello world!')).to.equal(`<div class='paragraph'>
Hello world!
</div>`);
    });
});
