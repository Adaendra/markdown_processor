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

    console.log(chalk.blue.bold('File name          : ' + options.name ))
    console.log(chalk.blue.bold('File path          : ' + options.destination))
    console.log(chalk.blue.bold('File origin path   : ' + options.file))

    fs.readFile(options.file, {encoding: 'utf-8'}, function (err, data) {
        if (!err) {
            htmlProcessor.generateHtmlFile(
                options.titre,
                options.destination + "/" + options.name,
                data
            )
        } else {
            // console.log(err);
            console.log(chalk.red.bold("File " + options.file + " doesn't exist"))
        }
    });
}
module.exports = process
