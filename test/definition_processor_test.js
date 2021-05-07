let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Definition processor", () => { // TODO
    it('Multiline', () => {
        expect(markdownProcessor.process(`a
: b
: c
:dd`)).to.equal(`<div class='paragraph'>
<dl>
<dt>a</dt>
<dd>b</dd>
<dd>c</dd>
</dl>

:dd
</div>`);
    })

    it('Multiline', () => {
        expect(markdownProcessor.process(`a
: b
: c
:dd
aa
: bb`)).to.equal(`<div class='paragraph'>
<dl>
<dt>a</dt>
<dd>b</dd>
<dd>c</dd>
</dl>

:dd
<dl>
<dt>aa</dt>
<dd>bb</dd>
</dl>

</div>`);
    })

    it('Multiline 2', () => {
        expect(markdownProcessor.process(`a
: b
: c

:dd
aa
: bb`)).to.equal(`<div class='paragraph'>
<dl>
<dt>a</dt>
<dd>b</dd>
<dd>c</dd>
</dl>


</div>
<div class='paragraph'>
:dd
<dl>
<dt>aa</dt>
<dd>bb</dd>
</dl>

</div>`);
    })
})
