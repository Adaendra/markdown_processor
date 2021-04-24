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

describe("List processor", () => {
    it('Single line -', () => {
        expect(markdownProcessor.process(`- test`)).to.equal(`<ul><li>test</li></ul>`);
    })
    it('Single line *', () => {
        expect(markdownProcessor.process(`* test`)).to.equal(`<ul><li>test</li></ul>`);
    })
    it('Single line +', () => {
        expect(markdownProcessor.process(`+ test`)).to.equal(`<ul><li>test</li></ul>`);
    })
    it('Multilines', () => {
        expect(markdownProcessor.process(`
- test
+ test 2
* test 3
`)).to.equal(`<ul>
<li>test
</li><li>test 2
</li><li>test 3
</li></ul>`);
    })
    it('Multilines - Sub List', () => { // TODO
        console.log(markdownProcessor.process(`
# titre
- test
 + a
 aa
  - b
    - c
   - d
        - z
    - e  
      * f
+ test 2
* test 3
d

d
`));
    })
})

describe("Ordered list processor", () => { // TODO
    it('Multilines - Sub List', () => {
        console.log(markdownProcessor.process(`
# titre
1. test
 1. a
 aa
  1. b
    1. c
   1. d
        1. z
    1. e  
      1. f
1. test 2
1. test 3
d

d
        1. test 4
1. test 5
`));
    })
})

describe("Horizontal Rule processor", () => { // TODO
    it('Simple line', () => {
        console.log(markdownProcessor.process("---"));
    })
    it('Multiline', () => {
        console.log(markdownProcessor.process(`a
---
b
---
c`));
    })
})
