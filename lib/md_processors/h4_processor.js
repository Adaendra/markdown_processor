'use strict';
const toc_utils = require('./../utils/toc_utils')
const uuid = require('uuid')

/**
 * Transform all "#### Title" in a "<h4>Title</h4>"
 * @param str : String - String to process
 * @return String - String processed
 */
module.exports = function h4_processor(str) {
    const regex = /^#{4} .+$/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            let id = 'title_element_' + uuid.v4().split('-').join('')
            toc_utils.addTitleToList(match.substring(5), 4, id)

            return [match, match.replace(/^#{4} /gm, "<h4 id='" + id + "' class='title_element title_element_4'>") + "</h4>"]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
