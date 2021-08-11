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
        if (options.file && options.folder) {
            throw "Both 'file' and 'folder' parameters can be defined."
        }
        if (!options.file && !options.folder) {
            throw "One of 'file' and 'folder' parameters must be defined."
        }

        // Retrieve all the files if it was a folder in input.
        if (options.folder) {
            options.file = file_utils.getMarkdownFilesFromFolder(options.folder)
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
            options.titre,
            options.destination + html_name,
            datas,
            options.theme,
            options.customTheme,
            options.output == 'pdf'
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
