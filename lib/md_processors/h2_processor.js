'use strict';

/**
 * Transform all "## Title" in a "<h2>Title</h2>"
 * @param str : String - String to process
 * @return String - String processed
 */
module.exports = function h2_processor(str) {
    const regex = /^#{2} .+$/gm;
    let arrayMatches = [...str.matchAll(regex)].flat();

    arrayMatches = arrayMatches.map(match => [match, match.replace(/^#{2} /gm, "<h2>") + "</h2>"])

    arrayMatches.forEach(match => {
        str = str.replace(match[0], match[1])
    })

    return str;
}
