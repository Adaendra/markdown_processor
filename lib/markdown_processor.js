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

        const regex = /((^|\n)(.+\n){1,}(\n|$)|^(.|\n)+$)/gm;
        let arrayMatches = str.match(regex);

        if (arrayMatches != null) {
            arrayMatches = arrayMatches.map(match => {
                this.processors.forEach(processor => match = processor(match))
                return "<div class='paragraph'>\n" + match + "\n</div>"
            })

            return arrayMatches.join("\n")
        }

        return str
    }

}

module.exports = new MarkdownProcessor()
