const conf = new (require('conf'))()
const chalk = require('chalk')


var fs = require('fs')


let htmlProcessor = require("../lib/index").htmlGenerator;

function process (options) {
    if (!options.name) {
        options.name = Date.now()
    }
    options.name = options.name + '.html'

    if (options.file && options.folder) {
        console.log(chalk.red.bold("Both 'file' and 'folder' parameters can be defined."))
    } else if (!options.file && !options.folder) {
        console.log(chalk.red.bold("One of 'file' and 'folder' parameters must be defined."))
    } else {
        if (options.folder) {
            options.file = getFilesFromFolder(options.folder)
        }

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
            console.log(
                chalk.blue.bold('Begin the Markdown Processing')
            )
            htmlProcessor.generateHtmlFile(
                options.titre,
                options.destination + options.name,
                datas,
                options.theme,
                options.customTheme,
                options.page,
                options.folder
            )

            console.log(chalk.blue.bold('Generated file with success :: ' + options.destination + options.name))
        }
    }
}

function getFilesFromFolder(folder) {
    let result_files = []
    var files_in_folder = fs.readdirSync(folder, {'withFileTypes' : true})
    files_in_folder.forEach(file => {
        console.log(file)
        if (fs.lstatSync(folder + "/" + file.name).isDirectory()) {
            getFilesFromFolder(folder + "/" + file.name).forEach(f => result_files.push(f))
        } else if (file.name.endsWith(".md")) {
            result_files.push(folder + "/" + file.name)
        }
    })

    return result_files
}

module.exports = process
