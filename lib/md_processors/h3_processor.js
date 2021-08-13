'use strict';
const toc_utils = require('./../utils/toc_utils')
const uuid = require('uuid')

/**
 * Transform all "### Title" in a "<h3>Title</h3>"
 * @param str : String - String to process
 * @return String - String processed
 */
module.exports = function h3_processor(str) {
    const regex = /^#{3} .+$/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            let id = 'title_element_' + uuid.v4().split('-').join('')
            toc_utils.addTitleToList(match.substring(4), 3, id)

            return [match, match.replace(/^#{3} /gm, "<h3 id='" + id + "' class='title_element title_element_3'>") + "</h3>"]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
