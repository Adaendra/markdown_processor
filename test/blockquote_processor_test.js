let markdownProcessor = require("../index");

var expect  = require("chai").expect;
describe("Blockquote processor", () => {
describe("Simple blockquote", () => { // TODO
    it('Normal', () => {
        expect(markdownProcessor.process(`> test
>
> a
a
> coucou
`)).to.equal(`<div class='blockquote '>
 test

 a
</div>
a
<div class='blockquote '>
 coucou
</div>
`);
    })
    it('Info', () => {
        expect(markdownProcessor.process(`> **[INFO]**
>
> a
a
> coucou
`)).to.equal(`<div class='blockquote info'>

 a
</div>
a
<div class='blockquote '>
 coucou
</div>
`);
    })
    it('Warning', () => {
        expect(markdownProcessor.process(`> **[WARNING]**
>
> a
a
> coucou
`)).to.equal(`<div class='blockquote warning'>

 a
</div>
a
<div class='blockquote '>
 coucou
</div>
`);
    })
    it('Alert', () => {
        expect(markdownProcessor.process(`> **[ALERT]**
>
> a
a
> coucou
`)).to.equal(`<div class='blockquote alert'>

 a
</div>
a
<div class='blockquote '>
 coucou
</div>
`);
    })
})
describe("Multiple blockquote - Parent", () => {
    it('Normal', () => {
        expect(markdownProcessor.process(`>
>> a
a
> coucou
`)).to.equal(`<div class='blockquote '>

<div class='blockquote '>
 a
</div>
</div>
a
<div class='blockquote '>
 coucou
</div>
`);
    })
    it('Info', () => {
        expect(markdownProcessor.process(`> **[INFO]**
>
>> a
a
> coucou
`)).to.equal(`<div class='blockquote info'>

<div class='blockquote '>
 a
</div>
</div>
a
<div class='blockquote '>
 coucou
</div>
`);
    })
    it('Warning', () => {
        expect(markdownProcessor.process(`> **[WARNING]**
>
>> a
a
> coucou
`)).to.equal(`<div class='blockquote warning'>

<div class='blockquote '>
 a
</div>
</div>
a
<div class='blockquote '>
 coucou
</div>
`);
    })
    it('Alert', () => {
        expect(markdownProcessor.process(`> **[ALERT]**
>
>> a
a
> coucou
`)).to.equal(`<div class='blockquote alert'>

<div class='blockquote '>
 a
</div>
</div>
a
<div class='blockquote '>
 coucou
</div>
`);
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
`)).to.equal(`<div class='blockquote '>
 a

<div class='blockquote info'>
 a
</div>
</div>
a
<div class='blockquote '>
 coucou
</div>
`);
    })
    it('Warning', () => {
        expect(markdownProcessor.process(`> a
>
>> **[WARNING]**
>> a
a
> coucou
`)).to.equal(`<div class='blockquote '>
 a

<div class='blockquote warning'>
 a
</div>
</div>
a
<div class='blockquote '>
 coucou
</div>
`);
    })
    it('Alert', () => {
        expect(markdownProcessor.process(`> a
>
>> **[ALERT]**
>> a
a
> coucou
`)).to.equal(`<div class='blockquote '>
 a

<div class='blockquote alert'>
 a
</div>
</div>
a
<div class='blockquote '>
 coucou
</div>
`);
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
`)).to.equal(`<div class='blockquote alert'>

 a
</div>
a
a> coucou

<div>test</div>
`);
    })
    it('Incorrect blockquote Child', () => {
        expect(markdownProcessor.process(`> **[ALERT]**
>
>>a
a
a> coucou

<div>test</div>
`)).to.equal(`<div class='blockquote alert'>

</div>
>>a
a
a> coucou

<div>test</div>
`);
    })
})
})
