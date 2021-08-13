'use strict';
const toc_utils = require('./../utils/toc_utils')
const uuid = require('uuid')

/**
 * Transform all "# Title" in a "<h1>Title</h1>"
 * @param str : String - String to process
 * @return String - String processed
 */
module.exports = function h1_processor(str) {
    const regex = /^# .+$/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            let id = 'title_element_' + uuid.v4().split('-').join('')
            toc_utils.addTitleToList(match.substring(2), 1, id)

            return [match, match.replace(/^# /gm, "<h1 id='" + id + "' class='title_element title_element_1'>") + "</h1>"]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
