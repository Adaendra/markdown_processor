'use strict';

// TODO
module.exports = function bold_processor(str) {
    const regex = /\*\*(?! |\n|\t)[^\*\*]+[ |\n|\t]{0}\*\*/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            return [match, match.replace(/^\*\*/gm, "<b>").replace(/\*\*$/gm, "</b>")]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
