'use strict';

let fs = require('fs');
let markdownProcessor = require('./markdown_processor')
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
        htmlFileContent += "@font-face {\n" +
            "    font-family: \"Solbera Imitation\";\n" +
            "    src:\n" +
            "        url(\""+__dirname+"/../resources/fonts/Solbera Imitation.otf\"),\n" +
            "        url(\"https://raw.githubusercontent.com/jonathonf/solbera-dnd-fonts/master/Solbera%20Imitation/Solbera%20Imitation.otf\") format(\"opentype\");\n" +
            "}\n" +
            "@font-face {\n" +
            "    font-family: \"Cinzel\";\n" +
            "    src: url(\""+__dirname+"/../resources/fonts/Cinzel-Regular.ttf\") format(\"truetype\");\n" +
            "}\n" +
            "@font-face {\n" +
            "    font-family: \"CinzelDecorative\";\n" +
            "    src: url(\""+__dirname+"/../resources/fonts/CinzelDecorative-Bold.ttf\") format(\"truetype\");\n" +
            "}\n" +
            "@font-face {\n" +
            "    font-family: \"Hahmlet\";\n" +
            "    src: url(\""+__dirname+"/../resources/fonts/Hahmlet-Regular.ttf\") format(\"truetype\");\n" +
            "}\n" +
            "@font-face {\n" +
            "    font-family: \"Nodesto Caps Condensed\";\n" +
            "    src: url(\""+__dirname+"/../resources/fonts/Nodesto Caps Condensed Bold.otf\") format(\"opentype\");\n" +
            "    font-weight: bold;\n" +
            "    font-style: italic;\n" +
            "}\n" +
            "@font-face {\n" +
            "    font-family: \"Roboto\";\n" +
            "    src: url(\"./resources/fonts/Roboto-Regular.ttf\") format(\"truetype\");\n" +
            "}"

        console.log()
        try {
            const data = fs.readFileSync(__dirname + '/../node_modules/highlight.js/scss/default.scss', 'utf8') // TODO : A pouvoir configurer
            htmlFileContent += data;
        } catch (err) {
            console.error(err)
        }

        if (options.customTheme) {
            try {
                htmlFileContent += fs.readFileSync(options.customTheme, 'utf8');
            } catch (e) {
                console.log(chalk.red.bold("File " + options.customTheme + " doesn't exist. The default style will be applied."))
                htmlFileContent += fs.readFileSync(__dirname + '/../resources/themes/default.css', 'utf8');

            }
        } else {
            htmlFileContent += fs.readFileSync(__dirname + '/../resources/themes/' + options.theme + '.css', 'utf8');
        }

        if (!is_pdf) {
            htmlFileContent += fs.readFileSync(__dirname + '/../resources/css/screen.css', 'utf8');
        }
        htmlFileContent += "</style>\n"
        htmlFileContent += "</head>\n"

        htmlFileContent += "<body>\n"

        if (options.frontMatter) {
            htmlFileContent += "<div class='page'>\n"
            htmlFileContent += "<h1>" + options.title + "</h1>"
            htmlFileContent += "<h3>" + options.subtitle + "</h3>"
            htmlFileContent += "<div>" + options.copyrights + "</div>"
            htmlFileContent += "</div>\n"
        }

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
        htmlFileContent += "</div></body>\n</html>"


        return htmlFileContent
    }

}

module.exports = new HtmlGenerator()
