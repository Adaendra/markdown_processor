const fs = require('fs')

class FileUtils {

    // ----- Constructor
    constructor() {
    }

    // ----- Public Methods
    /**
     * Retrieve all the markdown files from the folder gave in parameter.
     * @param folders : String[] - Array of folders.
     * @return {[]} - List of markdown files in the folder.
     */
    getMarkdownFilesFromFolder(folders) {
        let result_files = []
        folders.forEach(folder => {
            const files_in_folder = fs.readdirSync(folder, {'withFileTypes' : true})
            files_in_folder.forEach(file => {
                if (fs.lstatSync(folder + "/" + file.name).isDirectory()) {
                    this.getMarkdownFilesFromFolder(folder + "/" + file.name).forEach(f => result_files.push(f))
                } else if (file.name.endsWith(".md")) {
                    result_files.push(folder + "/" + file.name)
                }
            })
        })

        return result_files
    }

}


module.exports = new FileUtils()
