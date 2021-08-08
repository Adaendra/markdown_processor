'use strict';

/**
 * Processor to transform string to blockquotes.
 * @param str : String - String to transform.
 * @return String
 */
module.exports = function blockquote_processor(str) {
    const regex = /(^>{1,}(\n| \n| .+\n)){1,}/gm;
    let arrayMatches = str.match(regex);

    if (arrayMatches != null) {
        arrayMatches = arrayMatches.map(match => {
            var matchLines = match.split('\n')

            var newContent = ""
            var index = 0;
            var supplementaryClass = ""

            if (matchLines[0] == "> **[INFO]**") {
                index = 1;
                supplementaryClass="info"
            }

            if (matchLines[0] == "> **[WARNING]**") {
                index = 1;
                supplementaryClass="warning"
            }

            if (matchLines[0] == "> **[ALERT]**") {
                index = 1;
                supplementaryClass="alert"
            }

            for(var i = index; i<matchLines.length; i++) {
                newContent = newContent + matchLines[i].substring(1)
                if (i < matchLines.length-1) {
                    newContent = "<div>" + newContent + "</div>\n"
                }
            }

            return [match, "<div class='blockquote " + supplementaryClass +"'>\n" + blockquote_processor(newContent) + "</div>\n"]
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0], match[1])
        })
    }

    return str;
}
