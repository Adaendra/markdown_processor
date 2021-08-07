const chalk = require('chalk')
const fs = require('fs')


function generate_squeleton (options) {
    let file_to_copy = "./resources/squeleton/css_squeleton.css"
    if (options.theme) {
        file_to_copy = "./resources/css/" + options.theme + ".css"
    }

    if (!options.name) {
        options.name = Date.now()
    }

    let file_content = ""
    try {
        file_content = fs.readFileSync(file_to_copy, {encoding: 'utf-8'})

        fs.writeFile("./" + options.name + ".css", file_content, () => {})
    } catch (e) {
        console.log(chalk.red.bold("File " + file_to_copy + " doesn't exist"))
    }
}

module.exports = generate_squeleton
