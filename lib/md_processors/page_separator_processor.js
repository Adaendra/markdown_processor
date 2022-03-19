'use strict';

/**
 * Processor to transform string to page_breaker.
 * @param str : String - String to transform.
 * @return String
 */
module.exports = function page_separator_processor(str) {
    const regex = /^\/page$/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            return [match, match.replace(regex, "</div><div class='page paging-manual '>")]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
