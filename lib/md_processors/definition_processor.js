'use strict';

// TODO
module.exports = function definition_processor(str) {
    const regex = /^[^\t\n]{1,}\n(: .+[\n]{0,1}){1,}$/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            var matchLines = match.split('\n')

            var html = "<dl>\n"

            html = html + "<dt>" + matchLines[0] + "</dt>\n"

            for(var i=1; i<matchLines.length; i++) {
                html = html + "<dd>" + matchLines[i].substring(2) + "</dd>\n"
            }

            html = html + "</dl>\n"

            return [match, html]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
