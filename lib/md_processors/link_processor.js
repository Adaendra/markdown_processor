'use strict';

// TODO
module.exports = function link_processor(str) {
    const regex = /\[(?! |\n|\t)[^\[\]\n]{0,}[^ \n\t]{1}\]\([^\(\)\n]{0,}\)/g;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            var link_open_bracket = match.lastIndexOf('(')
            var link_close_bracket = match.lastIndexOf(')')
            const link = match.substring(link_open_bracket+1, link_close_bracket)

            var link_open_square_bracket = match.lastIndexOf('[')
            var link_close_square_bracket = match.lastIndexOf(']')
            const description = match.substring(link_open_square_bracket+1, link_close_square_bracket)

            return [match, "<a href=\"" + link + "\">" + description + "</a>"]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
