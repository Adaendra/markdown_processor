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
    console.log(chalk.gray.bold('File origin path   : ' + options.file))
    console.log(chalk.gray.bold('CSS theme          : ' + options.theme))

    fs.readFile(options.file, {encoding: 'utf-8'}, function (err, data) {
        if (!err) {
            htmlProcessor.generateHtmlFile(
                options.titre,
                options.destination + options.name,
                data,
                options.theme
            )

            console.log(chalk.blue.bold('Generated file with success :: ' + options.destination + options.name))
        } else {
            // console.log(err);
            console.log(chalk.red.bold("File " + options.file + " doesn't exist"))
        }
    });
}
module.exports = process
