'use strict';

// TODO : Documentation
module.exports = function list_processor(str) {
    const regex = /^[-\*+]{1} .+(\n {1,}.{0,}|\n|$)+/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => [match, match.replace(/[+\*-]{1} /gm, "<li>") + "</li>"])

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })

        return "<ul>" + str + "</ul>";
    }

    return str
}
