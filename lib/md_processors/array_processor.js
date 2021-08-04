'use strict';

// TODO
module.exports = function array_processor(str) {
    const regex = /\|.*\|\n(\|-{3,}){1,}\|{0,1}\n(\|.*(\n|$)){0,}/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            var arrayLines = match.split("\n")
            if (arrayLines.length > 2) {
                var nbrColumns = arrayLines[0].split('|').length - 2 // to remove the empty part at the beginning of the line and at the end of the line.

                var headers = arrayLines[1].match(/\|---/g)
                const nbrHeaders = headers!=null ? headers.length:0

                if (nbrColumns == nbrHeaders) {
                    var html = "<table cellspacing='0'>\n"

                    // Headers
                    const listHeaders = arrayLines[0].split("|")
                    html = html + "<tr>"
                    for (var i = 1; i < listHeaders.length -1 ; i++) { // -1 To avoid the last empty part at the end of the line
                        html = html + "<th>" + listHeaders[i] + "</th>"
                    }
                    html = html + "</tr>\n"

                    for(var i = 2; i < arrayLines.length; i++) {
                        if (arrayLines[i] != "") {
                            const listCell = arrayLines[i].split("|")

                            html = html + "<tr>"
                            for (var j = 1; j < listCell.length && j <= nbrColumns; j++) {
                                html = html + "<td>" + listCell[j] + "</td>"
                            }
                            html = html + "</tr>\n"
                        }
                    }

                    html = html + "</table>\n"
                    return [match, html]
                } else {
                    return [match, match]
                }
            }
            return [match, match]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
