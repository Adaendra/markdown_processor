'use strict';

let loader_utils = require('./utils/loader_utils')
var fs = require('fs');

class MarkdownProcessor {

    // ----- Constructor
    constructor() {
        this.processors = loader_utils.load_processors()
    }

    // ----- Public Methods
    process(str) {
        const reg = /```.+\n(.*\n){0,}```$/gm;
        let arr = str.match(reg);
        if (arr != null) {
            arr.forEach(match => {
                str = str.replace(match, match.replace(/\n/g, "<br/>"))
            })
        }

        str = str.split('\r\n').join('\n')
        const regex = /(.{1,}(\n|$))+/gm;
        let arrayMatches = str.match(regex);

        if (arrayMatches != null) {
            arrayMatches = arrayMatches.map(match => {
                if (match != '' && match != '\n') {
                    this.processors.forEach(processor => match = processor(match))
                    return "<div class='paragraph'>\n" + match + "\n</div>"
                }
            })

            return arrayMatches.join("\n")
        }

        return str
    }

}

module.exports = new MarkdownProcessor()
