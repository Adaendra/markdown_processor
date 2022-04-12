const chalk = require('chalk')
const fs = require('fs')
const htmlProcessor = require("../lib/index").htmlGenerator;
const cmd_utils = require("../lib/utils/cmd_utils")
const file_utils = require("../lib/utils/file_utils")

/**
 * Process some markdown files to or html/pdf...
 * @param options : Object - Command options.
 */
async function process (options) {
    try {
        if (options.optionFile) {
            let option_file_content = JSON.parse(fs.readFileSync(options.optionFile, 'utf8'));

            if (!options.name && option_file_content.name) {
                options.name = option_file_content.name
            }

            if (!options.file && option_file_content.file) {
                options.file = option_file_content.file
            }

            if (!options.folders && option_file_content.folders) {
                options.folders = option_file_content.folders
            }

            if (!options.table && option_file_content.table) {
                options.table = option_file_content.table
            }

            if (!options.destination && option_file_content.destination) {
                options.destination = option_file_content.destination
            }

            if (option_file_content.output) {
                options.output = option_file_content.output
            }

            if (!options.title && option_file_content.title) {
                options.title = option_file_content.title
            }

            if (!options.subtitle && option_file_content.subtitle) {
                options.subtitle = option_file_content.subtitle
            }

            if (!options.copyrights && option_file_content.copyrights) {
                options.copyrights = option_file_content.copyrights
            }

            if (option_file_content.theme) {
                options.theme = option_file_content.theme
            }

            if (!options.customTheme && option_file_content.customTheme) {
                options.customTheme = option_file_content.customTheme
            }

            if (!options.frontMatter && option_file_content.frontMatter) {
                options.frontMatter = option_file_content.frontMatter
            }
        }

        if (options.frontMatter) {
            options.frontMatter = true
        } else {
            options.frontMatter = false
        }

        // If any name is defined, generate on from timestamp
        if (!options.name) {
            options.name = Date.now()
        }
        let html_name = options.name + '.html'
        // If the user asks for a pdf file, the html file must have a random temporary name.
        if (options.output == 'pdf') {
            html_name = Date.now() + '.html'
        }

        // Return error if we have folder and files or none of them.
        if (options.file && options.folders) {
            throw "Both 'file' and 'folder' parameters can be defined."
        }
        if (!options.file && !options.folders) {
            throw "One of 'file' and 'folder' parameters must be defined."
        }

        if (options.table && !options.table.match(/^([1-6]|[1-6]-[1-6])$/gm)) {
            throw "Table parameter must match one of the next format : '[1-6]' or '[1-6]-[1-6]' ex: 2, 1-4"
        } else if (options.table) {
            if (options.table.length == 1) {
                options.table = options.table + "-" + options.table
            }

            toc_levels = options.table.split('-')

            if (toc_levels[0] > toc_levels[1]) {
                throw "First table of content parameter must be lower or equal than the second"
            }
        }


        // Retrieve all the files if it was a folder in input.
        if (options.folders) {
            options.file = file_utils.getMarkdownFilesFromFolder(options.folders)
        }

        // Show to the terminal the options selected
        console.log(chalk.gray.bold('File name          : ' + options.name))
        console.log(chalk.gray.bold('File path          : ' + options.destination))
        console.log(chalk.gray.bold('Files to process   : '))
        options.file.forEach(file => {
            console.log(chalk.gray.bold('- ' + file))
        })
        if (options.customTheme) {
            console.log(chalk.gray.bold('CSS custom theme   : ' + options.customTheme))
        } else {
            console.log(chalk.gray.bold('CSS theme          : ' + options.theme))
        }

        // Retrieve data from all files
        let datas = ""
        options.file.forEach(file_path => {
            try {
                datas = datas + fs.readFileSync(file_path, {encoding: 'utf-8'}) + "\n"
            } catch (e) {
                throw "File " + file_path + " doesn't exist"
            }
        })

        console.log(
            chalk.blue.bold('Begin the Markdown Processing')
        )
        // Generate the html file
        htmlProcessor.generateHtmlFile(
            options.title,
            options.destination + html_name,
            datas,
            options.output == 'pdf',
            options
        )


        if (options.output == 'pdf') {
            // If the asked output is a pdf, generate the pdf and delete the html file.
            await cmd_utils.sh('pagedjs-cli ' + options.destination + html_name + ' -o ' + options.destination + options.name + '.pdf');
            fs.unlinkSync(options.destination + html_name)
            console.log(chalk.blue.bold('Generated file with success :: ' + options.destination + options.name + '.pdf'))
        } else {
            console.log(chalk.blue.bold('Generated file with success :: ' + options.destination + html_name))
        }
    } catch (e) {
        console.log(chalk.red.bold(e))
    }
}





module.exports = process
