'use strict';

var fs = require('fs');
var markdownProcessor = require('./markdown_processor')
const chalk = require('chalk')


class HtmlGenerator {

    // ----- Constructor
    constructor() {
    }

    // ----- Public Methods
    generateHtmlFile(fileName, filePath, fileContent, css_theme, custom_css_theme, is_page) {
        let htmlFileContent = this.constructHtmlFile(fileContent, fileName, css_theme, custom_css_theme, is_page)

        fs.writeFile(filePath, htmlFileContent, () => {})

    }

    constructHtmlFile(fileContent, title, css_theme, custom_css_theme, is_page) {
        let htmlFileContent = "<html>\n"
        htmlFileContent += "<head>\n"
        htmlFileContent += "<title>" + title + "</title>\n"
        htmlFileContent += "<style>\n"

        try {
            const data = fs.readFileSync('./node_modules/highlight.js/scss/default.scss', 'utf8') // TODO : A pouvoir configurer
            htmlFileContent += data;
        } catch (err) {
            console.error(err)
        }

        if (custom_css_theme) {
            try {
                htmlFileContent += fs.readFileSync(custom_css_theme, 'utf8');
            } catch (e) {
                console.log(chalk.red.bold("File " + custom_css_theme + " doesn't exist. The default style will be applied."))
                htmlFileContent += fs.readFileSync('./resources/themes/default.css', 'utf8');
            }
        } else {
            htmlFileContent += fs.readFileSync('./resources/themes/' + css_theme + '.css', 'utf8');
        }

        if (is_page) {
            htmlFileContent += fs.readFileSync('./resources/css/page.css', 'utf8');
        }
        htmlFileContent += "</style>\n"
        htmlFileContent += "</head>\n"

        htmlFileContent += "<body>\n"
        htmlFileContent += "<div class='page'>\n"
        htmlFileContent += markdownProcessor.process(fileContent)
        htmlFileContent += "</page>\n</body>\n</html>"

        return htmlFileContent
    }

}

module.exports = new HtmlGenerator()
