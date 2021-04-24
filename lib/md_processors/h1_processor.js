'use strict';

/**
 * Transform all "# Title" in a "<h1>Title</h1>"
 * @param str : String - String to process
 * @return String - String processed
 */
module.exports = function h1_processor(str) {
    const regex = /^# .+$/gm;
    let arrayMatches = [...str.matchAll(regex)].flat();

    arrayMatches = arrayMatches.map(match => [match, match.replace(/^# /gm, "<h1>") + "</h1>"])

    arrayMatches.forEach(match => {
        str = str.replace(match[0], match[1])
    })

    return str;
}
