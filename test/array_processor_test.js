let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Array processor", () => { // TODO
    it('Multiline', () => {
        expect(markdownProcessor.process(`a

|tests|tr|
|---|---
|e|er|t|t|
|e
|a|

c`)).to.equal(`a

<table>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
<tr><td>e</td></tr>
<tr><td>a</td><td></td></tr>
</table>

c`);
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|
|e
|a|`)).to.equal(`<table>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
<tr><td>e</td></tr>
<tr><td>a</td><td></td></tr>
</table>
`);
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|
|e
|a|
`)).to.equal(`<table>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
<tr><td>e</td></tr>
<tr><td>a</td><td></td></tr>
</table>
`);
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|

|e
|a|
`)).to.equal(`<table>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
</table>

|e
|a|
`);
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|
a
|e
|a|
`)).to.equal(`<table>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
</table>
a
|e
|a|
`);
    })
    it('Multiline', () => {
        expect(markdownProcessor.process(`|tests|tr|
|---|---
|e|er|t|t|
  
|e
|a|
`)).to.equal(`<table>
<tr><th>tests</th><th>tr</th></tr>
<tr><td>e</td><td>er</td></tr>
</table>
  
|e
|a|
`);
    })
})
