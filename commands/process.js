const conf = new (require('conf'))()
const chalk = require('chalk')

let htmlProcessor = require("../lib/index").htmlGenerator;

function process (options) {
    console.log(
        chalk.blue.bold('Begin the Markdown Processing')
    )

    if (!options.name) {
        options.name = Date.now()
    }

    console.log(chalk.blue.bold('File name : ' + options.name + '.html'))
    console.log(chalk.blue.bold('File path : ' + options.destination))

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

    /*htmlProcessor.generateHtmlFile(
        fileName,
        filePath,
        fileContent
    )*/
}
module.exports = process
