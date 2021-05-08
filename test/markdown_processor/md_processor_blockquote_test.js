let markdownProcessor = require("../../index").markdownProcessor;

var expect  = require("chai").expect;
describe("Blockquote processor", () => {
    describe("Simple blockquote", () => { // TODO
        it('Normal', () => {
            expect(markdownProcessor.process(`> test
> c
> **a**
> b
a
> coucou
`)).to.equal(`<div class='paragraph'>
<div class='blockquote '>
<div><div><div><div> test</div>
 c</div>
 <b>a</b></div>
 b</div>
</div>
a
<div class='blockquote '>
<div> coucou</div>
</div>

</div>`);
        })
        it('Info', () => {
            expect(markdownProcessor.process(`> **[INFO]**
>
> a
a
> coucou
`)).to.equal(`<div class='paragraph'>
<div class='blockquote info'>
<div><div></div>
 a</div>
</div>
a
<div class='blockquote '>
<div> coucou</div>
</div>

</div>`);
        })
        it('Warning', () => {
            expect(markdownProcessor.process(`> **[WARNING]**
>
> a
a
> coucou
`)).to.equal(`<div class='paragraph'>
<div class='blockquote warning'>
<div><div></div>
 a</div>
</div>
a
<div class='blockquote '>
<div> coucou</div>
</div>

</div>`);
        })
        it('Alert', () => {
            expect(markdownProcessor.process(`> **[ALERT]**
>
> a
a
> coucou
`)).to.equal(`<div class='paragraph'>
<div class='blockquote alert'>
<div><div></div>
 a</div>
</div>
a
<div class='blockquote '>
<div> coucou</div>
</div>

</div>`);
        })
    })
    describe("Multiple blockquote - Parent", () => {
        it('Normal', () => {
            expect(markdownProcessor.process(`>
>> a
a
> coucou
`)).to.equal(`<div class='paragraph'>
<div class='blockquote '>
<div><div></div>
<div class='blockquote '>
<div> a</div></div>
</div>
</div>
a
<div class='blockquote '>
<div> coucou</div>
</div>

</div>`);
        })
        it('Info', () => {
            expect(markdownProcessor.process(`> **[INFO]**
>
>> a
a
> coucou
`)).to.equal(`<div class='paragraph'>
<div class='blockquote info'>
<div><div></div>
<div class='blockquote '>
<div> a</div></div>
</div>
</div>
a
<div class='blockquote '>
<div> coucou</div>
</div>

</div>`);
        })
        it('Warning', () => {
            expect(markdownProcessor.process(`> **[WARNING]**
>
>> a
a
> coucou
`)).to.equal(`<div class='paragraph'>
<div class='blockquote warning'>
<div><div></div>
<div class='blockquote '>
<div> a</div></div>
</div>
</div>
a
<div class='blockquote '>
<div> coucou</div>
</div>

</div>`);
        })
        it('Alert', () => {
            expect(markdownProcessor.process(`> **[ALERT]**
>
>> a
a
> coucou
`)).to.equal(`<div class='paragraph'>
<div class='blockquote alert'>
<div><div></div>
<div class='blockquote '>
<div> a</div></div>
</div>
</div>
a
<div class='blockquote '>
<div> coucou</div>
</div>

</div>`);
        })
    })
    describe("Multiple blockquote - Child", () => {
        it('Info', () => {
            expect(markdownProcessor.process(`> a
>
>> **[INFO]**
>> a
a
> coucou
`)).to.equal(`<div class='paragraph'>
<div class='blockquote '>
<div><div><div><div> a</div>
</div>
<div class='blockquote '>
<div><div> <b>[INFO]</b></div></div>
 a</div></div>
</div>
</div>
a
<div class='blockquote '>
<div> coucou</div>
</div>

</div>`);
        })
        it('Warning', () => {
            expect(markdownProcessor.process(`> a
>
>> **[WARNING]**
>> a
a
> coucou
`)).to.equal(`<div class='paragraph'>
<div class='blockquote '>
<div><div><div><div> a</div>
</div>
<div class='blockquote '>
<div><div> <b>[WARNING]</b></div></div>
 a</div></div>
</div>
</div>
a
<div class='blockquote '>
<div> coucou</div>
</div>

</div>`);
        })
        it('Alert', () => {
            expect(markdownProcessor.process(`> a
>
>> **[ALERT]**
>> a
a
> coucou
`)).to.equal(`<div class='paragraph'>
<div class='blockquote '>
<div><div><div><div> a</div>
</div>
<div class='blockquote '>
<div><div> <b>[ALERT]</b></div></div>
 a</div></div>
</div>
</div>
a
<div class='blockquote '>
<div> coucou</div>
</div>

</div>`);
        })
    })
    describe("Incorrect cases", () => {
        it('Incorrect blockquote', () => {
            expect(markdownProcessor.process(`> **[ALERT]**
>
> a
a
a> coucou

<div>test</div>
`)).to.equal(`<div class='paragraph'>
<div class='blockquote alert'>
<div><div></div>
 a</div>
</div>
a
a> coucou


</div>
<div class='paragraph'>
<div>test</div>

</div>`);
        })
        it('Incorrect blockquote Child', () => {
            expect(markdownProcessor.process(`> **[ALERT]**
>
>>a
a
a> coucou

<div>test</div>
`)).to.equal(`<div class='paragraph'>
<div class='blockquote alert'>
<div></div>
</div>
>>a
a
a> coucou


</div>
<div class='paragraph'>
<div>test</div>

</div>`);
        })
    })
})
