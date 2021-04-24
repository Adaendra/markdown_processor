'use strict';

// TODO
module.exports = function horizontal_rule_processor(str) {
    const regex = /(\n|^)---(\n|$)/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        str = str.replace(/(\n|^)---(\n|$)/gm, "\n<div class='horizontal_rule'></div>\n")
    }

    return str;
}
