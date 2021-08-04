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

    // TODO : Mettre la mise en place du process
    // TODO : Si on a aucun contenu (direct ou fichier), lancer une erreur
    /* const todoList = conf.get('todo-list')
    if (todoList && todoList.length) {
        console.log(
            chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')
        )
        todoList.forEach((task, index) => {
            if (task.done) {
                console.log(
                    chalk.greenBright(`${index}. ${task.text}`)
                )
            } else {
                console.log(
                    chalk.yellowBright(`${index}. ${task.text}`)
                )
            }
        })
    } else {
        console.log(
            chalk.red.bold('You don\'t have any tasks yet.')
        )
    } */

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
