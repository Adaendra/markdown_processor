let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Title processors", () => {
    it("H1", () => {
        expect(markdownProcessor.process('# Niveau 1')).to.equal('<h1>Niveau 1</h1>');
    });
    it("H2", () => {
        expect(markdownProcessor.process('## Niveau 2')).to.equal('<h2>Niveau 2</h2>');
    });
    it("H3", () => {
        expect(markdownProcessor.process('### Niveau 3')).to.equal('<h3>Niveau 3</h3>');
    });
    it("H4", () => {
        expect(markdownProcessor.process('#### Niveau 4')).to.equal('<h4>Niveau 4</h4>');
    });
    it("H5", () => {
        expect(markdownProcessor.process('##### Niveau 5')).to.equal('<h5>Niveau 5</h5>');
    });
    it("H6", () => {
        expect(markdownProcessor.process('###### Niveau 6')).to.equal('<h6>Niveau 6</h6>');
    });
    it("Ignored", () => {
        expect(markdownProcessor.process('Hello world!')).to.equal('Hello world!');
    });
});
