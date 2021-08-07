'use strict';

var fs = require('fs');
var markdownProcessor = require('./markdown_processor')

class HtmlGenerator {

    // ----- Constructor
    constructor() {
    }

    // ----- Public Methods
    generateHtmlFile(fileName, filePath, fileContent, css_theme) {
        let htmlFileContent = this.constructHtmlFile(fileContent, fileName, css_theme)

        fs.writeFile(filePath, htmlFileContent, () => {})

    }

    constructHtmlFile(fileContent, title, css_theme) {
        let htmlFileContent = "<html>\n"
        htmlFileContent += "<head>\n"
        htmlFileContent += "<title>" + title + "</title>\n"
        htmlFileContent += "<style>\n"
        try {
            const data = fs.readFileSync('./resources/css/' + css_theme + '.css', 'utf8')
            htmlFileContent += data;
        } catch (err) {
            console.error(err)
        }
        htmlFileContent += "</style>\n"
        htmlFileContent += "<style>\n"
        try {
            const data = fs.readFileSync('./node_modules/highlight.js/scss/default.scss', 'utf8') // TODO : A pouvoir configurer
            htmlFileContent += data;
        } catch (err) {
            console.error(err)
        }
        htmlFileContent += "</style>\n"
        htmlFileContent += "</head>\n"

        htmlFileContent += "<body>\n"
        htmlFileContent += markdownProcessor.process(fileContent)
        htmlFileContent += "\n</body>\n</html>"

        return htmlFileContent
    }

}

module.exports = new HtmlGenerator()
