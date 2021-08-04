'use strict';

const hljs = require('highlight.js');

// TODO
module.exports = function code_block_processor(str) {
    const regex = /^```((?!```).*|<br\/>){0,}```$/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            const matchLines = match.split("<br/>")

            var code = ""

            for(var i=1; i<matchLines.length-1; i++) {
                if (i>1) {
                    code = code + "\n"
                }
                code = code + matchLines[i]
            }

            if(matchLines[0].length > 5) {
                var language = matchLines[0].substr(3, matchLines[0].length - 2)

                return [match, "<pre><code>" + hljs.highlight(code, {language: language}).value + "</code></pre>"]
            } else {
                return [match, "<pre><code>" + hljs.highlight(code, {language: 'text'}).value + "</code></code>"]
            }
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
