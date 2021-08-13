'use strict';
const toc_utils = require('./../utils/toc_utils')
const uuid = require('uuid')

/**
 * Transform all "###### Title" in a "<h6>Title</h6>"
 * @param str : String - String to process
 * @return String - String processed
 */
module.exports = function h6_processor(str) {
    const regex = /^#{6} .+$/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            let id = 'title_element_' + uuid.v4().split('-').join('')
            toc_utils.addTitleToList(match.substring(7), 6, id)

            return [match, match.replace(/^#{6} /gm, "<h6 id='" + id + "' class='title_element title_element_6'>") + "</h6>"]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
