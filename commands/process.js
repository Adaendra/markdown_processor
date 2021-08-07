const conf = new (require('conf'))()
const chalk = require('chalk')


var fs = require('fs')


let htmlProcessor = require("../lib/index").htmlGenerator;

function process (options) {
    console.log(
        chalk.blue.bold('Begin the Markdown Processing')
    )

    if (!options.name) {
        options.name = Date.now()
    }
    options.name = options.name + '.html'

    console.log(chalk.gray.bold('File name          : ' + options.name ))
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

    let datas = ""
    let continueProcessing = true
    options.file.forEach(file_path => {
        try {
            datas = datas + fs.readFileSync(file_path, {encoding: 'utf-8'}) + "\n"
        } catch (e) {
            continueProcessing = false
            console.log(chalk.red.bold("File " + file_path + " doesn't exist"))
        }
    })

    if (continueProcessing) {
        htmlProcessor.generateHtmlFile(
            options.titre,
            options.destination + options.name,
            datas,
            options.theme,
            options.customTheme
        )

        console.log(chalk.blue.bold('Generated file with success :: ' + options.destination + options.name))
    }
}
module.exports = process
