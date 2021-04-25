let markdownProcessor = require("../index");

var expect  = require("chai").expect;

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
