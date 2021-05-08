'use strict';

var fs = require('fs');
var markdownProcessor = require('./markdown_processor')

class HtmlGenerator {

    // ----- Constructor
    constructor() {
    }

    // ----- Public Methods
    generateHtmlFile(filePath, fileContent) {
        var htmlFileContent = markdownProcessor.process(fileContent)

        fs.writeFile(filePath, htmlFileContent, () => {})

    }

}

module.exports = new HtmlGenerator()
