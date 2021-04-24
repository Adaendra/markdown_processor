'use strict';

/**
 * Transform all "### Title" in a "<h3>Title</h3>"
 * @param str : String - String to process
 * @return String - String processed
 */
module.exports = function h3_processor(str) {
    const regex = /^#{3} .+$/gm;
    let arrayMatches = [...str.matchAll(regex)].flat();

    arrayMatches = arrayMatches.map(match => [match, match.replace(/^#{3} /gm, "<h3>") + "</h3>"])

    arrayMatches.forEach(match => {
        str = str.replace(match[0], match[1])
    })

    return str;
}
