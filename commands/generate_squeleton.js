const chalk = require('chalk')
const fs = require('fs')

/**
 * Generate a squeleton for a new theme or clone an existing theme.
 * @param options : Object
 */
function generate_squeleton (options) {
    let file_to_copy = "./resources/squeleton/css_squeleton.css"

    // If a theme is selected, we will clone it.
    if (options.theme) {
        file_to_copy = "./resources/css/" + options.theme + ".css"
    }

    // If no name was given, a generated name is set.
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
