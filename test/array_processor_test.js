let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Array processor", () => { // TODO
    it('Multiline 1', () => {
        expect(markdownProcessor.process(`a

|tests|tr|
|---|---
|e|er|t|t|
|e
|a|

c`)).to.equal(`<div class='paragraph'>
a


</div>
<div class='paragraph'>
<table>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
<tr><td>e</td></tr>
<tr><td>a</td><td></td></tr>
</table>


</div>
<div class='paragraph'>
c
</div>`);
    })
    it('Multiline 2', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|
|e
|a|`)).to.equal(`<div class='paragraph'>
<table>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
<tr><td>e</td></tr>
<tr><td>a</td><td></td></tr>
</table>

</div>`);
    })
    it('Multiline 3', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|
|e
|a|
`)).to.equal(`<div class='paragraph'>
<table>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
<tr><td>e</td></tr>
<tr><td>a</td><td></td></tr>
</table>

</div>`);
    })
    it('Multiline 4', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|

|e
|a|
`)).to.equal(`<div class='paragraph'>
<table>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
</table>


</div>
<div class='paragraph'>
|e
|a|

</div>`);
    })
    it('Multiline 5', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|
a
|e
|a|
`)).to.equal(`<div class='paragraph'>
<table>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
</table>
a
|e
|a|

</div>`);
    })
    it('Multiline 6', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|
  
|e
|a|
`)).to.equal(`<div class='paragraph'>
<table>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
</table>
  
|e
|a|

</div>`);
    })
})
