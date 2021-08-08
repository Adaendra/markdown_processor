'use strict';

/**
 * Processor set italic texts elements.
 * @param str : String - String to transform.
 * @return String
 */
module.exports = function italic_processor(str) {
    const regex = /\*(?! |\n|\t)[^\*]+[ |\n|\t]{0}\*/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            return [match, match.replace(/^\*/gm, "<i>").replace(/\*$/gm, "</i>")]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
