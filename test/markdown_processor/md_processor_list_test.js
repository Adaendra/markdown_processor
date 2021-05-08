let markdownProcessor = require("../../index").markdownProcessor;

var expect  = require("chai").expect;

describe("List processor", () => {
    it('Single line -', () => {
        expect(markdownProcessor.process(`- test`)).to.equal(`<div class='paragraph'>

<ul><li>test</li></ul>

</div>`);
    })
    it('Single line *', () => {
        expect(markdownProcessor.process(`* test`)).to.equal(`<div class='paragraph'>

<ul><li>test</li></ul>

</div>`);
    })
    it('Single line +', () => {
        expect(markdownProcessor.process(`+ test`)).to.equal(`<div class='paragraph'>

<ul><li>test</li></ul>

</div>`);
    })
    it('Multilines', () => {
        expect(markdownProcessor.process(`
- test
+ test 2
* test 3
`)).to.equal(`<div class='paragraph'>


<ul><li>test
</li></ul>

<ul><li>test 2
</li></ul>

<ul><li>test 3
</li></ul>

</div>`);
    })
    it('Multilines - Sub List', () => { // TODO
        expect(markdownProcessor.process(`
# titre
- test
 + a
 aa
  - b
    - c
   - d
        - z - f
    - e  
      * f
+ test 2
* test 3
d

d
`)).to.equal(`<div class='paragraph'>

<h1>titre</h1>

<ul><li>test
<ul>
<li>a
</li>aa
<li>b
</li><li>c
</li><li>d
<ul>
<li>z - f
</li></ul></li><li>e  
<ul>
<li>f
</li></ul></li></ul></li></ul>

<ul><li>test 2
</li></ul>

<ul><li>test 3
</li></ul>
d


</div>
<div class='paragraph'>
d

</div>`)
    })
    it('Multilines - Sub List with tasks', () => { // TODO
        expect(markdownProcessor.process(`
# titre
- test
 + a
 aa
  - [ ] b
    - [] c
   - d
        - z - f
    - [x] e  
      * f
+ [ ] test 2
* [x] test 3
d

d
`)).to.equal(`<div class='paragraph'>

<h1>titre</h1>

<ul><li>test
<ul>
<li>a
</li>aa
<li><input type='checkbox'>b</input>
</li><li>[] c
</li><li>d
<ul>
<li>z - f
</li></ul></li><li><input type='checkbox' checked>e  </input>
<ul>
<li>f
</li></ul></li></ul></li></ul>

<ul><li><input type='checkbox'>test 2</input>
</li></ul>

<ul><li><input type='checkbox' checked>test 3</input>
</li></ul>
d


</div>
<div class='paragraph'>
d

</div>`)
    })
})

describe("Ordered list processor", () => { // TODO
    it('Multilines - Sub List', () => {
        expect(markdownProcessor.process(`
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
`)).to.equal(`<div class='paragraph'>

<h1>titre</h1>

<ul><li>1.test
<ul>
<li>1.a</li>
aa
<li>2.b</li>
<li>3.c</li>
<li>4.d
<ul>
<li>1.z</li></ul></li>
<li>5.e  
<ul>
<li>1.f</li></ul></li></ul></li></ul>


<ul><li>2.test 2</li></ul>


<ul><li>3.test 3</li></ul>

d


</div>
<div class='paragraph'>
d
        1. test 4

<ul><li>1.test 5
</li></ul>

</div>`);
    })
    it('Without sublist', () => {
        expect(markdownProcessor.process(`1. az
1. ez
7. az

`)).to.equal(`<div class='paragraph'>

<ul><li>1.az</li></ul>


<ul><li>2.ez</li></ul>


<ul><li>3.az

</li></ul>

</div>`);
    })
    it('Without sublist but with space', () => {
        expect(markdownProcessor.process(`1. az
1. ez

7. az

`)).to.equal(`<div class='paragraph'>

<ul><li>1.az</li></ul>


<ul><li>2.ez

</li></ul>

</div>
<div class='paragraph'>

<ul><li>1.az

</li></ul>

</div>`);
    })
})
