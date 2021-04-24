'use strict';

/**
 * Transform all "##### Title" in a "<h5>Title</h5>"
 * @param str : String - String to process
 * @return String - String processed
 */
module.exports = function h5_processor(str) {
    const regex = /^#{5} .+$/gm;
    let arrayMatches = [...str.matchAll(regex)].flat();

    arrayMatches = arrayMatches.map(match => [match, match.replace(/^#{5} /gm, "<h5>") + "</h5>"])

    arrayMatches.forEach(match => {
        str = str.replace(match[0], match[1])
    })

    return str;
}
