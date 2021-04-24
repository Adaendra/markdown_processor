'use strict';

/**
 * Transform all "#### Title" in a "<h4>Title</h4>"
 * @param str : String - String to process
 * @return String - String processed
 */
module.exports = function h4_processor(str) {
    const regex = /^#{4} .+$/gm;
    let arrayMatches = [...str.matchAll(regex)].flat();

    arrayMatches = arrayMatches.map(match => [match, match.replace(/^#{4} /gm, "<h4>") + "</h4>"])

    arrayMatches.forEach(match => {
        str = str.replace(match[0], match[1])
    })

    return str;
}
