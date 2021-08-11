const conf = new (require('conf'))()
const chalk = require('chalk')
const fs = require('fs')
const childProcess = require('child_process');

let htmlProcessor = require("../lib/index").htmlGenerator;


async function process (options) {
    if (!options.name) {
        options.name = Date.now()
    }
    let html_name = options.name + '.html'
    if (options.output == 'pdf') {
        html_name = Date.now() + '.html'
    }
    const pdf_name = options.name + '.pdf'

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
                options.destination + html_name,
                datas,
                options.theme,
                options.customTheme,
                options.output == 'pdf'
            )

            console.log(chalk.blue.bold('Generated file with success :: ' + options.destination + options.name))

            if (options.output == 'pdf') {
                await sh('pagedjs-cli ' + options.destination + html_name + ' -o ' + options.destination + pdf_name);
                fs.unlinkSync(options.destination + html_name)
            }
        }
    }
}

async function sh(cmd) {
    return new Promise(function (resolve, reject) {
        childProcess.exec(cmd, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
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
