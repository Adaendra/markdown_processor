'use strict';

/**
 * Processor set horizontal rules.
 * @param str : String - String to transform.
 * @return String
 */
module.exports = function horizontal_rule_processor(str) {
    const regex = /(\n|^)-{3}(\n|$)/gm;
    str = horizontal_rule_process(str, /(\n|^)-{3}(\n|$)/gm, "small_horizontal_rule")
    str = horizontal_rule_process(str, /(\n|^)-{4}(\n|$)/gm, "medium_horizontal_rule")
    str = horizontal_rule_process(str, /(\n|^)-{5,}(\n|$)/gm, "large_horizontal_rule")

    return str;
}

function horizontal_rule_process(str, regex, css_class) {
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            return [match, "\n<div class='" + css_class + "'></div>\n"]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;

}
