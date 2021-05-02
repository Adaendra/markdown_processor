let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Definition processor", () => { // TODO
    it('Multiline', () => {
        expect(markdownProcessor.process(`a
: b
: c
:dd`)).to.equal(`<dl>
<dt>a</dt>
<dd>b</dd>
<dd>c</dd>
</dl>

:dd`);
    })

    it('Multiline', () => {
        expect(markdownProcessor.process(`a
: b
: c
:dd
aa
: bb`)).to.equal(`<dl>
<dt>a</dt>
<dd>b</dd>
<dd>c</dd>
</dl>

:dd
<dl>
<dt>aa</dt>
<dd>bb</dd>
</dl>
`);
    })
})
