'use strict';

let loader_utils = require('./utils/loader_utils')

class MarkdownProcessor {

    // ----- Constructor
    constructor() {
        this.processors = loader_utils.load_processors()
    }

    // ----- Public Methods
    process(str) {
        // To manage CRLF endline
        str = str.split('\r\n').join('\n')

        // Transform bloc code to let them be ignored by the other processors.
        // TODO : Mettre cette regex en constante
        const reg = /^```((?!```).*|\n){0,}```$/gm;
        let arr = str.match(reg);
        if (arr != null) {
            arr.forEach(match => {
                str = str.replace(match, match.split('\n').join("<br/>"))
            })
        }

        // List all the paragraphs
        const regex = /(.{1,}(\n|$))+/gm;
        let arrayMatches = str.match(regex);

        // Process all the paragraphs
        if (arrayMatches != null) {
            arrayMatches = arrayMatches.map(match => {
                if (match != '' && match != '\n') {
                    let is_modified = false
                    this.processors.forEach(processor => {
                        const new_match = processor(match)

                        if (match != new_match) {
                            is_modified = true
                        }

                        match = new_match
                    })
                    if (is_modified) {
                        return "<div class='paragraph'>\n" + match + "\n</div>"
                    } else if (!match.match(/^(<br>|<br\/>|\n)+$/gm)) {
                        return "<p>\n" + match + "\n</p>"
                    } else {
                        return match
                    }
                }
            })

            return arrayMatches.join("\n")
        }

        return str
    }

}

module.exports = new MarkdownProcessor()
