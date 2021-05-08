let htmlProcessor = require("../lib/index").htmlGenerator;

var expect  = require("chai").expect;

describe("HTML Generator", () => {
    it('Dummy test to generate an html file', () => {
        htmlProcessor.generateHtmlFile('Test', 'test.html', `
# Test 1
## Test 2
### Test 3
#### Test 4
##### Test 5
###### Test 6

> test
> **test**
>> *hi there*

> **[INFO]**
> This is an info panel

> **[WARNING]**
> This is a warning

> **[ALERT]**
> This is an alert! /!\\

This is a dummy text with a ~~strike~~ in the middle.

---

- a
+ b
* c
- [ ] e
- [x] e2
99. az
1. ez
7. az
- e
5. ee

[Google](https://google.com)

![Overlord{"width":"150px","height":"300px", "showLegend":true}](https://pbs.twimg.com/media/E03ocFyXIAQ4yie?format=jpg&name=large)

\`\`\`javascript
     let test = pouet;
     console.log(test);       
\`\`\`

|a|b|
|---|---
|1|2
|3|4

Tokyo
: Japan
: Asia
        `)
    });
});
