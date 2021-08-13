'use strict';
const toc_utils = require('./../utils/toc_utils')
const uuid = require('uuid')

/**
 * Transform all "##### Title" in a "<h5>Title</h5>"
 * @param str : String - String to process
 * @return String - String processed
 */
module.exports = function h5_processor(str) {
    const regex = /^#{5} .+$/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            let id = 'title_element_' + uuid.v4().split('-').join('')
            toc_utils.addTitleToList(match.substring(6), 5, id)

            return [match, match.replace(/^#{5} /gm, "<h5 id='" + id + "' class='title_element title_element_5'>") + "</h5>"]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
