'use strict';

var fs = require('fs');
var markdownProcessor = require('./markdown_processor')
const chalk = require('chalk')
const toc_utils = require('./utils/toc_utils')


class HtmlGenerator {

    // ----- Constructor
    constructor() {
    }

    // ----- Public Methods
    generateHtmlFile(fileName, filePath, fileContent, is_pdf, options) {
        let htmlFileContent = this.constructHtmlFile(fileContent, fileName, is_pdf, options)

        fs.writeFileSync(filePath, htmlFileContent, () => {})

    }

    constructHtmlFile(fileContent, title, is_pdf, options) {
        const markdown_processed = markdownProcessor.process(fileContent)

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

        if (options.customTheme) {
            try {
                htmlFileContent += fs.readFileSync(options.customTheme, 'utf8');
            } catch (e) {
                console.log(chalk.red.bold("File " + options.customTheme + " doesn't exist. The default style will be applied."))
                htmlFileContent += fs.readFileSync('./resources/themes/default.css', 'utf8');
            }
        } else {
            htmlFileContent += fs.readFileSync('./resources/themes/' + options.theme + '.css', 'utf8');
        }

        if (!is_pdf) {
            htmlFileContent += fs.readFileSync('./resources/css/screen.css', 'utf8');
        }
        htmlFileContent += "</style>\n"
        htmlFileContent += "</head>\n"

        htmlFileContent += "<body>\n"
        htmlFileContent += "<div class='page'>\n"

        // Display the Table of Content if ask
        if (options.table) {
            const toc_levels = options.table.split('-')
            htmlFileContent += "<ul id='toc'>\n"
            toc_utils.title_list.forEach(title => {
                if (toc_levels[0] == title.level || (toc_levels[0] < title.level && toc_levels[1] > title.level) || toc_levels[1] == title.level) {
                    htmlFileContent += "<li><a href='#" + title.id + "' class='toc_element_" + title.level + "'>" + title.name + "</a></li>"
                }
            })
            htmlFileContent += "</ul>\n"
        }

        htmlFileContent += markdown_processed
        htmlFileContent += "</body>\n</html>"


        return htmlFileContent
    }

}

module.exports = new HtmlGenerator()
