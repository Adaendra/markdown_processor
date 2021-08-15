'use strict';


/**
 * Processor to transform string to images.
 * @param str : String - String to transform.
 * @return String
 */
module.exports = function image_processor(str) {
    const regex = /!\[(?! |\n|\t)[^\[\]\n]{0,}[^ \n\t]{1}\]\([^\(\)\n]{0,}\)/g;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            var link_open_bracket = match.lastIndexOf('(')
            var link_close_bracket = match.lastIndexOf(')')
            var link = match.substring(link_open_bracket+1, link_close_bracket)

            var link_open_square_bracket = match.lastIndexOf('[')
            var link_close_square_bracket = match.lastIndexOf(']')
            const description_and_options = match.substring(link_open_square_bracket+1, link_close_square_bracket)

            var description_open_curly_bracket = description_and_options.indexOf('{')
            var description_close_curly_bracket = description_and_options.indexOf('}')
            var description = description_and_options
            var options = '{}'
            if (description_open_curly_bracket > -1 && description_close_curly_bracket > -1 && description_open_curly_bracket < description_close_curly_bracket) {
                description = description_and_options.substr(0, description_open_curly_bracket)
                options = description_and_options.substr(description_open_curly_bracket)
            }

            var json_options = JSON.parse(options)

            var html = "<figure alt=\"" + description + "\""
            if (json_options.width != undefined && json_options.width != null && json_options.width != "") {
                html = html + " width=\"" + json_options.width + "\""
            }
            if (json_options.height != undefined && json_options.height != null && json_options.height != "") {
                html = html + " height=\"" + json_options.height + "\""
            }
            if (json_options.class != undefined && json_options.class != null && json_options.class != "") {
                html = html + " class=\"" + json_options.class + "\""
            }
            html = html + "><img src=\"" + link + "\">"

            if (json_options.showLegend != undefined && json_options.showLegend != null && json_options.showLegend != "" && json_options.showLegend == true) {
                html = html + "<figcaption>" + description + "</figcaption>"
            }

            html = html + "</figure>"

            return [match, html]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
