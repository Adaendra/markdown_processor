'use strict';
const toc_utils = require('./../utils/toc_utils')
const uuid = require('uuid')

/**
 * Transform all "## Title" in a "<h2>Title</h2>"
 * @param str : String - String to process
 * @return String - String processed
 */
module.exports = function h2_processor(str) {
    const regex = /^#{2} .+$/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            let id = 'title_element_' + uuid.v4().split('-').join('')
            toc_utils.addTitleToList(match.substring(3), 2, id)

            return [match, match.replace(/^#{2} /gm, "<h2 id='" + id + "' class='title_element title_element_2'>") + "</h2>"]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
