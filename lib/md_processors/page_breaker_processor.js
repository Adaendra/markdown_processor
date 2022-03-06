'use strict';

/**
 * Processor to transform string to page_breaker.
 * @param str : String - String to transform.
 * @return String
 */
module.exports = function page_breaker_processor(str) {
    const regex = /^{% page_break %}$/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            return [match, match.replace(/^{% page_break %}$/gm, "<div style='break-after: column'></div>")]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
