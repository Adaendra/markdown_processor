'use strict';

/**
 * Processor set horizontal rules.
 * @param str : String - String to transform.
 * @return String
 */
module.exports = function horizontal_rule_processor(str) {
    const regex = /(\n|^)-{3,}(\n|$)/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            return [match, "\n<div class='horizontal_rule'></div>\n"]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
