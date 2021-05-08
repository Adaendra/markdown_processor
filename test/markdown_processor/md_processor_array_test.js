let markdownProcessor = require("../../index").markdownProcessor;

var expect  = require("chai").expect;

describe("Array processor", () => {
    it('Array with another paragraph', () => {
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
<table cellspacing='0'>
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
    it('Array alone', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|
|e
|a|`)).to.equal(`<div class='paragraph'>
<table cellspacing='0'>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
<tr><td>e</td></tr>
<tr><td>a</td><td></td></tr>
</table>

</div>`);
    })
    it('Array with some lines with more column than defined.', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|
|e
|a|
`)).to.equal(`<div class='paragraph'>
<table cellspacing='0'>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
<tr><td>e</td></tr>
<tr><td>a</td><td></td></tr>
</table>

</div>`);
    })
    it('Array with an empty space between two lines', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|

|e
|a|
`)).to.equal(`<div class='paragraph'>
<table cellspacing='0'>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
</table>


</div>
<div class='paragraph'>
|e
|a|

</div>`);
    })
    it('Array with a non array line', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|
a
|e
|a|
`)).to.equal(`<div class='paragraph'>
<table cellspacing='0'>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
</table>
a
|e
|a|

</div>`);
    })
    it('Array with a non array line 2', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|
  
|e
|a|
`)).to.equal(`<div class='paragraph'>
<table cellspacing='0'>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
</table>
  
|e
|a|

</div>`);
    })
})
