'use strict';

// TODO : Documentation
module.exports = function list_processor(str) {
    const regex = /^[-\*+]{1} .+(\n {1,}.{0,}|\t {1,}.{0,}|\n|$)+/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match =>
            [match, sublist(match).replace(/[+\*-]{1} /gm, "<li>") + "</li>"]
        )

        arrayMatches.forEach(match => {
            str = str.replace(match[0],  "<ul>" + match[1] + "</ul>\n")
        })

        return str;
    }

    return str
}


function sublist(str) {
    var first_line = str.split('\n')[0]
    str = str.replace(first_line, '')

    if (str != '') {
        str = str.replace(/^(\t|[ ]{1,4})/gm, '');

        let arrayMatches = str.match(/^[-\*+]{1} .+(\n {1,}.{0,}|\t {1,}.{0,}|\n|$)+/gm);

        if (arrayMatches != null) {
            arrayMatches = arrayMatches.map(match =>
                [match, sublist(match).replace(/[+\*-]{1} /gm, "<li>") + "</li>"]
            )

            arrayMatches.forEach(match => {
                str = str.replace(match[0], match[1])
            })

            return ""+ first_line + "<ul>" + str + "</ul>";
        }
    }

    return "" + first_line + str
}
