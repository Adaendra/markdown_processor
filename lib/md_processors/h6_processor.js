'use strict';

/**
 * Transform all "###### Title" in a "<h6>Title</h6>"
 * @param str : String - String to process
 * @return String - String processed
 */
module.exports = function h6_processor(str) {
    const regex = /^#{6} .+$/gm;
    let arrayMatches = [...str.matchAll(regex)].flat();

    arrayMatches = arrayMatches.map(match => [match, match.replace(/^#{6} /gm, "<h6>") + "</h6>"])

    arrayMatches.forEach(match => {
        str = str.replace(match[0], match[1])
    })

    return str;
}
