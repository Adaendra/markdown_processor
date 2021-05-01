let markdownProcessor = require("../index");

var expect  = require("chai").expect;

describe("Code Block processor", () => { // TODO
    it('Javascript', () => {
        expect(markdownProcessor.process(`\`\`\`javascript
let test = "";

console.log(test);
        
\`\`\`
`)).to.equal(`<pre><span class="hljs-keyword">let</span> test = <span class="hljs-string">&quot;&quot;</span>;

<span class="hljs-built_in">console</span>.log(test);
        
</pre>
`);
    })
})
