let markdownProcessor = require("../../index").markdownProcessor;

var expect  = require("chai").expect;

describe("Code Block processor", () => { // TODO
    it('Javascript', () => {
        expect(markdownProcessor.process(`\`\`\`javascript
let test = "";

console.log(test);
        
\`\`\`
`)).to.equal(`<div class='paragraph'>
<pre><span class="hljs-keyword">let</span> test = <span class="hljs-string">&quot;&quot;</span>;

<span class="hljs-built_in">console</span>.log(test);
        
</pre>

</div>`);
    })
})
